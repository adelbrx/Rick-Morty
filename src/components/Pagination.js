import style from "./Pagination.module.css";

function Pagination({ handlePage, page, nbPages }) {
  function handleNextPage() {
    handlePage(page + 1);
  }

  function handlePrecedentPage() {
    handlePage(page > 1 ? page - 1 : 1);
  }

  return (
    <div className={style.pagination}>
      {page > 1 && <button onClick={handlePrecedentPage}>Précédent</button>}
      {page < nbPages && <button onClick={handleNextPage}>Suivant</button>}
    </div>
  );
}

export default Pagination;
