import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { CodeOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

import { Input, Button, Alert } from 'antd';
import { md5Hash } from '../../utils/utils';
import { setToken } from '../../utils/request';
import styles from './index.less';

import WithDva from '../../utils/store';
import Router from 'next/router';

@Form.create()
class Login extends PureComponent {
  componentDidMount() {
    // window.addEventListener('token', this.handleToken);
    window.addEventListener('message', this.handleToken);

    this.dispatch({
      type: 'login/loadCaptcha',
    });
  }
  handleToken = event => {
    console.log('Binht. on message  = ', event);

    const {
      data: { token },
    } = event;

    // alert(event.data);
    if (token != 'undefined' && token !== undefined && token != null) {
      setToken(token);
      Router.back();
    } else {
      console.log('Cannot find token ');
    }
  };
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
  handleClick = e => {
    console.log('Login by google ');
    window.open(
      'http://localhost:10088',
      'Popup',
      'location,status,scrollbars,resizable,width=600, height=600'
    );
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
      <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col span={6}>
          <div className={styles.main}>
            <Form onSubmit={this.handleSubmit} className="login-form">
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
                      style={{ width: '50%', marginRight: 10 }}
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
                  Login
                </Button>
                <Button
                  size="large"
                  loading={login.submitting}
                  className={styles.submit}
                  type="primary"
                  htmlType="button"
                  onClick={this.handleClick}
                >
                  Google
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>{' '}
      </Row>
    );
  }
}

export default WithDva(({ login }) => ({
  login,
}))(Login);
