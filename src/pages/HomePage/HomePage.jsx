import { useSelector } from 'react-redux'
import PageTitle from '../../components/PageTitle/PageTitle'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import css from './HomePage.module.css'

export default function HomePage () {
    const isLogedIn = useSelector(selectIsLoggedIn)
    return <div className={css.container}>
          <PageTitle>This is Phonebook wellcome page</PageTitle>  
          <p>Here you can store your contacts</p> 
          {!isLogedIn ?  <p>To start, register/login first.</p> : <p>To add contact, type name and number, push "Add Contact" button. <br/>To find contact, just start typing name.</p> }    
         </div>
}