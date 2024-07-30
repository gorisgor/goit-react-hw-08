import { Field, Form, Formik } from 'formik'
import css from './LoginForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/auth/operations';
import { selectLoading } from '../../redux/auth/selectors';
import {AuthLoader} from '../Loader/Loader'


export default function LoginForm () {
  const isLoading = useSelector(selectLoading)
const dispatch = useDispatch()
const handleSubmit = (values, actions) => {
  dispatch(login(values));
  actions.resetForm();
};
    return (<Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form  autoComplete="off" className={css.container}>
          <div className={css.fieldGroup}>
          <label>Email</label>
          <Field className={css.input} name="email" type="text" />
      </div>
      <div className={css.fieldGroup}>
          <label>Password</label>
          <Field className={css.input} name="password" type="password" />
      </div>
          {isLoading ? <AuthLoader/> : <button type="submit" className={css.btn}>Log In</button>}
        </Form>
      </Formik>)
}