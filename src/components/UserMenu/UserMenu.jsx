import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css'
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { selectLoading } from '../../redux/auth/selectors'
import {AuthLoader} from '../Loader/Loader'


export default function UserMenu (){
   const isLoading = useSelector(selectLoading)
   const user = useSelector(selectUser)
   const dispatch = useDispatch()
   const handleClick = () => {
   dispatch(logout());
};
    return <div className={css.container}>
        <p>Welcome, {user.name}</p>
        {isLoading ? <AuthLoader/> :<button type='button' onClick={handleClick}>LogOut</button>}
    </div>
}