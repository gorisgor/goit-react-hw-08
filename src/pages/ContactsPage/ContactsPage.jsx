import PageTitle from '../../components/PageTitle/PageTitle'
import Loader from '../../components/Loader/Loader'
import Error from '../../components/Error/Error'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import SearchBox from '../../components/SearchBox/SearchBox'
import css from './ContactsPage.module.css'

export default function ContactsPage (){
    return <div className={css.container}>
        <PageTitle>Your Phonebook</PageTitle>
        <Loader />
        <Error />
        <ContactForm />
        <SearchBox />
        <ContactList />
    </div>
}