import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Block } from '../../../components';

const success = false;

const LoginForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, isValid } = props;
  return (
    <React.Fragment>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>

      <Block>
        <Form onSubmit={handleSubmit} size="large" name="normal_login" className="login-form">
          <Form.Item
            validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
            help={!touched.email ? '' : errors.email}
            hasFeedback
            name="email">
            <Input
              id="email"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item
            validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
            help={!touched.password ? '' : errors.password}
            hasFeedback
            name="password">
            <Input
              id="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>

          <Form.Item>
            <Button
              onClick={handleSubmit}
              type="primary"
              size="large"
              className="login-form-button button">
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link className=" auth__register-link" to="/register">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </React.Fragment>
  );
};

export default LoginForm;
