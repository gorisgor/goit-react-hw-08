import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import Error from "../../components/Error/Error";
import css from "./LoginPage.module.css";
import { selectError } from "../../redux/auth/selectors";

export default function LoginPage() {
  const isError = useSelector(selectError);
  return (
    <div className={css.container}>
      <PageTitle>Log In</PageTitle>
      {isError ? <Error /> : <LoginForm />}
    </div>
  );
}
