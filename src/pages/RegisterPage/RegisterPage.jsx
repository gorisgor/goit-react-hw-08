import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./RegisterPage.module.css";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/auth/selectors";

export default function LoginPage() {
  const isError = useSelector(selectError);
  return (
    <div className={css.container}>
      <PageTitle>Registration</PageTitle>
      {isError ? (
        <p className={css.error}>Please, reload page and type valid data!!!</p>
      ) : (
        <RegistrationForm />
      )}
    </div>
  );
}
