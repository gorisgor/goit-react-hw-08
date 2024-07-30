import css from './UserMenu.module.css'


export default function UserMenu (){
    return <div className={css.container}>
        <p>Welcome, username</p>
        <button type='button'>LogOut</button>
    </div>
}