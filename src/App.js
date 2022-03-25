import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { NasaData } from "./components/NasaData";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: "white";
  border: 3px solid #8842cf;
  background-color: #d3a9fc;
  text-align: center;
  p {
    color: white;
    font-weight: bold;
  }

  h1 {
    color: white;
  }

  .info {
    width: 60vw;
    margin: 50px auto;
  }
`;

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <StyledDiv className="App">{data && <NasaData photo={data} />}</StyledDiv>
  );
}

export default App;
