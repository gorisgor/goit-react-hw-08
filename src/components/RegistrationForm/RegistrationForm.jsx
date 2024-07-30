import { Formik, Form, Field } from 'formik'
import { register } from '../../redux/auth/operations'
import { useDispatch, useSelector } from 'react-redux'
import {AuthLoader} from '../Loader/Loader'
import css from './RegistrationForm.module.css'
import { selectLoading } from '../../redux/auth/selectors'



export default function RegistrationForm (){
  const isLoading = useSelector(selectLoading)
  const dispatch = useDispatch()
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
    return <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form  autoComplete="off" className={css.container}>
      <div className={css.fieldGroup}>
          <label>Username</label>
          <Field className={css.input} name="name" type="text" />
      </div>
      <div className={css.fieldGroup}>
          <label>Email</label>
          <Field className={css.input} name="email" type="text" />
      </div>
      <div className={css.fieldGroup}>
          <label>Password</label>
          <Field className={css.input} name="password" type="password" />
      </div>
      {isLoading ? <AuthLoader/> :<button type="submit" className={css.btn}>Register</button>}
      </Form>
    </Formik>
}