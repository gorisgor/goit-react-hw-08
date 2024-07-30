import PageTitle from '../../components/PageTitle/PageTitle'
import Loader from '../../components/Loader/Loader'
import Error from '../../components/Error/Error'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import SearchBox from '../../components/SearchBox/SearchBox'
import css from './ContactsPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectError, selectLoading } from '../../redux/contacts/selectors'
import { fetchContacts } from '../../redux/contacts/operations'
import { useEffect } from 'react'

export default function ContactsPage (){
    const isLoading = useSelector(selectLoading)
    const isError = useSelector(selectError)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

    return <div className={css.container}>
        <PageTitle>Your Phonebook</PageTitle>
        {isLoading && <Loader />}
        {isError && <Error />}
        <ContactForm />
        <SearchBox />
        <ContactList />
    </div>
}