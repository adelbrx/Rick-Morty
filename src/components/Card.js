import { Link } from "react-router-dom";
import style from "./Card.module.css";

function Card({ character }) {
  return (
    <div key={character.id} className={style.character__item}>
      <div className={style.character__container}>
        <div
          className={style.character__image}
          style={{
            backgroundImage: `linear-gradient(to left bottom, rgba(13, 27, 42, 0.5), rgba(27, 38, 59, 0.2)), url("${character.image}")`,
          }}
          alt={character.name}
        ></div>
        <h3 className={style.character__name}>{character.name}</h3>
        <p className={style.character__status}>{character.status}</p>
      </div>

      <Link to={`/character/${character.id}`}>
        <div className={style.character__btn}>Détails</div>
      </Link>
    </div>
  );
}

export default Card;
