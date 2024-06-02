import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import style from "./HomePage.module.css";
import Header from "../components/Header";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [nbPages, setNbPages] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${filter}`
      )
      .then((response) => {
        setNbPages(response.data.info.pages);
        setCharacters(response.data.results);
      })
      .catch((error) => console.error(error));
  }, [page, filter, search]);

  return (
    <div className={style.homepage}>
      <Header
        setFilter={setFilter}
        setSearch={setSearch}
        search={search}
        filter={filter}
        className={style.header}
      />
      <CardList characters={characters} />
      <Pagination handlePage={setPage} page={page} nbPages={nbPages} />
    </div>
  );
};

export default HomePage;
