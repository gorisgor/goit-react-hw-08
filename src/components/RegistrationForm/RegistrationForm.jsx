import { Formik, Form, Field } from 'formik'
import css from './RegistrationForm.module.css'

export default function RegistrationForm ({handleSubmit}){
    return <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form  autoComplete="off">
        <label >
          Username
          <Field type="text" name="name" />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label >
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
}