import React, { PureComponent } from 'react';

import { CodeOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Button, Alert } from 'antd';
import { md5Hash } from '../../utils/utils';

import styles from './index.less';

import WithDva from '../../utils/store';

// @connect(({ login }) => ({
//   login,
// }))

@Form.create()
class Login extends PureComponent {
  componentDidMount() {
    this.dispatch({
      type: 'login/loadCaptcha',
    });
  }

  reloadCaptcha = () => {
    this.dispatch({
      type: 'login/reloadCaptcha',
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { form, dispatch, login } = this.props;
    form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        dispatch({
          type: 'login/submit',
          payload: {
            user_name: values.user_name,
            captcha_code: values.captcha_code,
            captcha_id: login.captchaID,
            password: md5Hash(values.password),
          },
        });
      }
    });
  };

  dispatch = action => {
    const { dispatch } = this.props;
    dispatch(action);
  };

  renderMessage = (type, message) => (
    <Alert style={{ marginBottom: 24 }} message={message} type={type} closable />
  );

  render() {
    const {
      form: { getFieldDecorator },
      login,
    } = this.props;

    return (
      <div className={styles.main}>
        <Form onSubmit={this.handleSubmit}>
          {login.status === 'FAIL' &&
            login.submitting === false &&
            this.renderMessage('warning', login.tip)}

          {login.status === 'ERROR' &&
            login.submitting === false &&
            this.renderMessage('error', login.tip)}

          <Form.Item>
            {getFieldDecorator('user_name', {
              rules: [
                {
                  required: true,
                  message: 'Please enter username',
                },
              ],
            })(
              <Input
                size="large"
                prefix={<UserOutlined className={styles.prefixIcon} />}
                placeholder="Please enter username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please enter password',
                },
              ],
            })(
              <Input
                size="large"
                prefix={<LockOutlined className={styles.prefixIcon} />}
                type="password"
                placeholder="Please enter password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Input.Group compact>
              {getFieldDecorator('captcha_code', {
                rules: [
                  {
                    required: true,
                    message: 'Please enter verification code!',
                  },
                ],
              })(
                <Input
                  style={{ width: '60%', marginRight: 10 }}
                  size="large"
                  prefix={<CodeOutlined className={styles.prefixIcon} />}
                  placeholder="Please enter verification code!"
                />
              )}
              <div
                style={{
                  width: 120,
                  height: 40,
                }}
              >
                <img
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                  src={login.captcha}
                  alt="Verification Code"
                  onClick={() => {
                    this.reloadCaptcha();
                  }}
                />
              </div>
            </Input.Group>
          </Form.Item>
          <Form.Item className={styles.additional}>
            <Button
              size="large"
              loading={login.submitting}
              className={styles.submit}
              type="primary"
              htmlType="submit"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default WithDva(({ login }) => ({
  login,
}))(Login);

// export default Login;
