import LoginForm from '../components/LoginForm';

import { withFormik } from 'formik';
import validateFn from '../../../utils/validations';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: (values) => {
    let errors = {};

    const validate = validateFn({ isAuth: true });

    Object.keys(values).forEach((key) => validate[key] && validate[key](errors, values[key]));

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'LoginForm',
})(LoginForm);
