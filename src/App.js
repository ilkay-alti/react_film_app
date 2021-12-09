import axios from "axios";
import React, { useState, useEffect } from "react";
import FilmCard from "./components/FilmCard";

const App = () => {
  const [URL, setURL] = useState("Spider");
  const [allfilms, setAllFilms] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const flimName = e.target.ftext.value;
    setURL(flimName);
  };

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?s=" + URL + "&page=2&apikey=be90f806")
      .then((response) => setAllFilms(response.data.Search))
      .catch((error) => console.log({ error }));
  }, [handleSubmit]);

  return (
    <div>
      <div className="footer">
        <div>
          <h1>SEARCH MOVİE</h1>
        </div>
        <form onSubmit={handleSubmit} className="search">
          <input name="ftext" type="text" placeholder="search..." />
          <button>Search</button>
        </form>
      </div>
      <div className="containers">
        {allfilms.map((film) => (
          <FilmCard
            title={film.Title}
            year={film.Year}
            poster={film.Poster}
            type={film.Type}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
