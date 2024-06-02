import Card from "./Card";
import style from "./CardList.module.css";

function CardList({ characters }) {
  return (
    <div className={style.character_list}>
      {characters.map((character) => (
        <Card character={character} key={character.id} />
      ))}
    </div>
  );
}

export default CardList;
