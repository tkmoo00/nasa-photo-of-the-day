import React from "react";

export const NasaData = (props) => {
  return (
    <div>
      <h1>{props.photo.title}</h1>
      <p>{props.photo.date}</p>
      <img src={props.photo.hdurl} />
      <p>{props.photo.info}</p>
    </div>
  );
};
