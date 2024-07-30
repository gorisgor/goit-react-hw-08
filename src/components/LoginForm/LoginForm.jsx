import { Field, Form, Formik } from 'formik'
import css from './LoginForm.module.css'


export default function LoginForm ({handleSubmit}) {
    return (<Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form  autoComplete="off">
          <label >
            Email
            <Field type="email" name="email" />
          </label>
          <label >
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>)
}