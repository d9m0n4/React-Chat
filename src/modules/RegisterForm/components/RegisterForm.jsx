import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Block } from '../../../components';

const success = false;

const RegisterForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, isValid } = props;

  return (
    <React.Fragment>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit} size="large" name="normal_login" className="login-form">
            <Form.Item
              validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
              help={!touched.email ? '' : errors.email}
              hasFeedback
              name="email">
              <Input
                id="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>

            <Form.Item name="name">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="name"
                placeholder="Ваше имя"
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

            <Form.Item name="repassword">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Повторить пароль"
              />
            </Form.Item>

            <Form.Item>
              <Button
                onClick={handleSubmit}
                type="primary"
                size="large"
                className="login-form-button button">
                Зарегистрироваться
              </Button>
            </Form.Item>
            {!isValid && <span>ОШИБКА!!!</span>}
            <Link className=" auth__register-link" to="/login">
              Войти
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone className="info__icon" />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>Ссылка на подтверждение аккаунта отправлена </p>
          </div>
        )}
      </Block>
    </React.Fragment>
  );
};

export default RegisterForm;
