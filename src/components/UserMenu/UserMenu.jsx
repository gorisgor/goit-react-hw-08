import React from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";
import {
  selectError,
  selectUser,
  selectLoading,
} from "../../redux/auth/selectors";
import { AuthLoader } from "../Loader/Loader";
import Error from "../Error/Error";

export default function UserMenu() {
  const isLoading = useSelector(selectLoading);
  const user = useSelector(selectUser);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className={css.container}>
      {isError ? (
        <p>Connections problem</p>
      ) : (
        <>
          <p>Welcome, {user.name}</p>{" "}
          {isLoading ? (
            <AuthLoader />
          ) : (
            <button className={css.btn} type="button" onClick={handleClick}>
              LogOut
            </button>
          )}
        </>
      )}
    </div>
  );
}
