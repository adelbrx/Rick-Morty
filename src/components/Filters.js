import style from "./Filters.module.css";

function Filters({ handleFilter, filter }) {
  return (
    <div className={style.filter_buttons}>
      <button
        onClick={() => handleFilter("")}
        className={!filter ? style.activated : ""}
      >
        Tous
      </button>
      <button
        onClick={() => handleFilter("alive")}
        className={filter === "alive" ? style.activated : console.log(style)}
      >
        Vivant
      </button>
      <button
        onClick={() => handleFilter("dead")}
        className={filter === "dead" ? style.activated : ""}
      >
        Mort
      </button>
    </div>
  );
}

export default Filters;
