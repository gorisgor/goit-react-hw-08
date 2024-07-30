import PageTitle from '../../components/PageTitle/PageTitle'
import css from './HomePage.module.css'

export default function HomePage () {
    return <div className={css.container}>
          <PageTitle>This is Phonebook wellcome page</PageTitle>  
          <p>Here you can store your Contacts</p> 
          <p>To start, register/login first</p>     
         </div>
}