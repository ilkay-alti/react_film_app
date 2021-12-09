import React from "react";

const FilmCard = ({ title, year, poster, type }) => {
  return (
    <div className="film-card">
      <div>
        <img src={poster} alt={title} />
      </div>
      <div className="flim-info">
        <h1>{title}</h1>
        <h2>Fılm Year : {year}</h2>
        <span>Type : {type}</span>
      </div>
    </div>
  );
};

export default FilmCard;
