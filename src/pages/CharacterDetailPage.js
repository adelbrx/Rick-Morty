import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Logo from "../components/Logo";
import style from "./CharacterDetailPage.module.css";

const CharacterDetailPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!character) {
    return <div>Chargement...</div>;
  }

  return (
    <div className={style.body}>
      <div className={style.character_page}>
        <Logo className={style.logo} />
        <div className={style.character_detail}>
          <Link to="/" className={style.back_button}>
            Retour
          </Link>
          <div className={style.container}>
            <div className={style.container_image}>
              <div
                className={style.character_image}
                style={{
                  backgroundImage: `linear-gradient(to left bottom, rgba(13, 27, 42, 0.5), rgba(27, 38, 59, 0.2)), url("${character.image}")`,
                }}
              ></div>
            </div>
            <div className={style.container_informations}>
              <h1>{character.name}</h1>
              <p>
                {character.name} is a {character.gender} {character.species}{" "}
                from {character.origin.name} this character is{" "}
                {character.status} and the last location of this character was{" "}
                {character.location.name}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPage;
