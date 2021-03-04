// import { history } from 'umi';
import { parse } from 'qs';
import { setToken, logout } from '@/utils/request';
import * as loginService from '@/services/login';

export default {
  namespace: 'login',

  state: {
    status: '',
    tip: '',
    submitting: false,
    captchaID: '',
    captcha: '',
  },

  effects: {
    *loadCaptcha(_, { call, put }) {
      const response = yield call(loginService.captchaID);
      const { captcha_id: captchaID } = response;

      yield put({
        type: 'saveCaptchaID',
        payload: captchaID,
      });
      yield put({
        type: 'saveCaptcha',
        payload: loginService.captcha(captchaID),
      });
    },
    *reloadCaptcha(_, { put, select }) {
      const captchaID = yield select(state => state.login.captchaID);
      yield put({
        type: 'saveCaptcha',
        payload: `${loginService.captcha(captchaID)}&reload=${Math.random()}`,
      });
    },
    *submit({ payload }, { call, put }) {
      //binhnt: Change button 
      yield put({
        type: 'changeSubmitting',
        payload: true,
      });

      //binhnt: Call service to submit login 
      const response = yield call(loginService.login, payload);
      if (response.data && response.data.error) {
        const {
          data: {
            error: { message },
          },
          status,
        } = response;
        yield [
          put({
            type: 'saveTip',
            payload: message,
          }),
          put({
            type: 'saveStatus',
            payload: status >= 500 ? 'ERROR' : 'FAIL',
          }),
          put({
            type: 'changeSubmitting',
            payload: false,
          }),
          put({
            type: 'loadCaptcha',
          }),
        ];
        return;
      }

      // Save the access token
      setToken(response);

      yield [
        put({
          type: 'saveTip',
          payload: '',
        }),
        put({
          type: 'saveStatus',
          payload: '',
        }),
        put({
          type: 'changeSubmitting',
          payload: false,
        }),
      ];

      const params = parse(window.location.href.split('?')[1]);
      const { redirect } = params;
      if (redirect) {
        window.location.href = redirect;
        return;
      }
      history.replace('/');
    },
    *logout(_, { call }) {
      console.log("Model process logout")
      logout();
      // const response = yield call(loginService.logout);
      // if (response.status === 'OK') {
      // logout();
      // }
    },
  },

  reducers: {
    saveCaptchaID(state, { payload }) {
      return {
        ...state,
        captchaID: payload,
      };
    },
    saveCaptcha(state, { payload }) {
      return {
        ...state,
        captcha: payload,
      };
    },
    saveStatus(state, { payload }) {
      return {
        ...state,
        status: payload,
      };
    },
    saveTip(state, { payload }) {
      return {
        ...state,
        tip: payload,
      };
    },
    changeSubmitting(state, { payload }) {
      return {
        ...state,
        submitting: payload,
      };
    },
  },
};
