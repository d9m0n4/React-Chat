export default ({ isAuth }) => ({
  email: (errors, value) => {
    if (!value) {
      errors.email = 'Введите email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errors.email = 'Не корректный email';
    }
  },
  password: (errors, value) => {
    if (!value) {
      errors.password = 'Введите пароль';
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value)) {
      errors.password = isAuth ? 'Не верный пароль' : 'Не корректный пароль';
    }
  },
});
