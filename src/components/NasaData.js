import React from "react";

export const NasaData = (props) => {
  return (
    <div>
      <h1>{props.photo.title}</h1>
      <p>{props.photo.date}</p>
      <img alt="" src={props.photo.hdurl} />
      <p className="info">{props.photo.explanation}</p>
    </div>
  );
};
