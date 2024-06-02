import style from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <div>
      <h1 className={style.message}>ERROR 404 : Page not found :(</h1>
    </div>
  );
}

export default PageNotFound;
