import { Link } from "react-router-dom";
import style from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.svg" alt="Logo" className={style.logo} />
    </Link>
  );
}

export default Logo;
