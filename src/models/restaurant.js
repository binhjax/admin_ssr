import { message } from 'antd';
import * as restaurantService from '../services/restaurant';

export default {
  namespace: 'restaurant',
  state: {
    search: {},
    pagination: {},
    data: {
      list: [],
      pagination: {},
    },
    submitting: false,
    formType: '',
    formTitle: '',
    formID: '',
    formVisible: false,
    formData: {},
    treeData: [],
    expandedKeys: [],
  },
  effects: {
    *fetch({ search, pagination }, { call, put, select }) {
      console.log('restarant.model.fetch: is triggered');
      let params = {};

      if (search) {
        params = { ...params, ...search };
        yield put({
          type: 'saveSearch',
          payload: search,
        });
      } else {
        const s = yield select(state => state.menu.search);
        if (s) {
          params = { ...params, ...s };
        }
      }

      if (pagination) {
        params = { ...params, ...pagination };
        yield put({
          type: 'savePagination',
          payload: pagination,
        });
      } else {
        const p = yield select(state => state.menu.pagination);
        if (p) {
          params = { ...params, ...p };
        }
      }
      const response = yield call(restaurantService.query, params);
      console.log('model.fetch: return value, ', response);

      //binhnt edit
      var data = {
        list: response,
        pagination: 0,
      };
      yield put({
        type: 'saveData',
        payload: data,
      });
    },
    *loadForm({ payload }, { put, select }) {
      yield put({
        type: 'changeFormVisible',
        payload: true,
      });

      yield [
        put({
          type: 'saveFormType',
          payload: payload.type,
        }),
        put({
          type: 'saveFormTitle',
          payload: 'New menu',
        }),
        put({
          type: 'saveFormID',
          payload: '',
        }),
        put({
          type: 'saveFormData',
          payload: {},
        }),
        put({ type: 'fetchTree' }),
      ];

      if (payload.type === 'E') {
        yield [
          put({
            type: 'saveFormTitle',
            payload: 'Edit menu',
          }),
          put({
            type: 'saveFormID',
            payload: payload.id,
          }),
          put({
            type: 'fetchForm',
            payload: { id: payload.id },
          }),
        ];
      } else {
        const search = yield select(state => state.menu.search);
        yield put({
          type: 'saveFormData',
          payload: { parent_id: search.parentID ? search.parentID : '' },
        });
      }
    },
    *fetchForm({ payload }, { call, put }) {
      const response = yield call(restaurantService.get, payload.id);
      yield put({
        type: 'saveFormData',
        payload: response,
      });
    },
    *submit({ payload }, { call, put, select }) {
      yield put({
        type: 'changeSubmitting',
        payload: true,
      });

      const params = { ...payload };
      const formType = yield select(state => state.menu.formType);
      let success = false;
      if (formType === 'E') {
        const id = yield select(state => state.menu.formID);
        const response = yield call(restaurantService.update, id, params);
        if (response.status === 'OK') {
          success = true;
        }
      } else {
        const response = yield call(restaurantService.create, params);
        if (response.id && response.id !== '') {
          success = true;
        }
      }

      yield put({
        type: 'changeSubmitting',
        payload: false,
      });

      if (success) {
        message.success('Saved successfully');
        yield put({
          type: 'changeFormVisible',
          payload: false,
        });

        yield put({ type: 'fetchTree' });
        yield put({ type: 'fetch' });
      }
    },
    *del({ payload }, { call, put }) {
      const response = yield call(restaurantService.del, payload.id);
      if (response.status === 'OK') {
        message.success('successfully deleted');
        yield put({ type: 'fetchTree' });
        yield put({ type: 'fetch' });
      }
    },
    *fetchTree({ payload }, { call, put }) {
      let params = {};
      if (payload) {
        params = { ...params, ...payload };
      }
      const response = yield call(restaurantService.queryTree, params);
      yield put({
        type: 'saveTreeData',
        payload: response.list || [],
      });
    },
    *changeStatus({ payload }, { call, put, select }) {
      let response;
      if (payload.status === 1) {
        response = yield call(restaurantService.enable, payload.id);
      } else {
        response = yield call(restaurantService.disable, payload.id);
      }

      if (response.status === 'OK') {
        let msg = 'Successfully activated';
        if (payload.status === 2) {
          msg = 'Deactivated successfully';
        }
        message.success(msg);
        const data = yield select(state => state.menu.data);
        const newData = { list: [], pagination: data.pagination };

        for (let i = 0; i < data.list.length; i += 1) {
          const item = data.list[i];
          if (item.id === payload.id) {
            item.status = payload.status;
          }
          newData.list.push(item);
        }

        yield put({
          type: 'saveData',
          payload: newData,
        });
      }
    },
  },
  reducers: {
    saveData(state, { payload }) {
      return { ...state, data: payload };
    },
    saveSearch(state, { payload }) {
      return { ...state, search: payload };
    },
    savePagination(state, { payload }) {
      return { ...state, pagination: payload };
    },
    changeFormVisible(state, { payload }) {
      return { ...state, formVisible: payload };
    },
    saveFormType(state, { payload }) {
      return { ...state, formType: payload };
    },
    saveFormTitle(state, { payload }) {
      return { ...state, formTitle: payload };
    },
    saveFormID(state, { payload }) {
      return { ...state, formID: payload };
    },
    saveFormData(state, { payload }) {
      return { ...state, formData: payload };
    },
    changeSubmitting(state, { payload }) {
      return { ...state, submitting: payload };
    },
    saveTreeData(state, { payload }) {
      return { ...state, treeData: payload };
    },
    saveExpandedKeys(state, { payload }) {
      return { ...state, expandedKeys: payload };
    },
  },
};
