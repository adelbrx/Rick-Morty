import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import style from "./Header.module.css";

function Header({ setSearch, setFilter, search, filter }) {
  return (
    <header className={style.header}>
      <Logo />
      <div className={style.navigation}>
        <SearchBar handleSearch={setSearch} search={search} />
        <Filters handleFilter={setFilter} filter={filter} />
      </div>
    </header>
  );
}

export default Header;
