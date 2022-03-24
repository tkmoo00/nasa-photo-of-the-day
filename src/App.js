import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { NasaData } from "./components/NasaData";

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
  return <div className="App">{data && <NasaData photo={data} />}</div>;
}

export default App;
