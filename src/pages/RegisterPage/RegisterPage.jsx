import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import PageTitle from '../../components/PageTitle/PageTitle'
import css from './RegisterPage.module.css'

export default function LoginPage (){
    return <div className={css.container}>
        <PageTitle>Registration</PageTitle >
        <RegistrationForm />
    </div>
}