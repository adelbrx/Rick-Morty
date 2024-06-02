import style from "./SearchBar.module.css";
import { IonIcon } from "@ionic/react";

function SearchBar({ handleSearch, search }) {
  function handleClearText() {
    handleSearch("");
  }

  return (
    <div className={style.container}>
      <div className={style.container_left}>
        <IonIcon name="search-outline" className={style.icon_search}></IonIcon>
        <input
          className={style.search_bar}
          type="text"
          placeholder="Rechercher un personnage"
          value={search}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
      {search && (
        <IonIcon
          name="close-outline"
          className={style.icon_clear}
          onClick={handleClearText}
        ></IonIcon>
      )}
    </div>
  );
}

export default SearchBar;
