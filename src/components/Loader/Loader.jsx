import { BallTriangle, Blocks } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#ff7d00"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </div>
  );
}

export function AuthLoader () {
  return (
    <div className={css.loader}>
      <Blocks
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  visible={true}
  />
    </div>
  );
}