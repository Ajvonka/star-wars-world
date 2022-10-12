import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

type Result = {
  count: number;
  next: string;
  previous: string;
  results: People[];
};

type People = {
  name: string;
  height: string;
  mass: string;
  gender: string;
  url: string;
};

enum Url {
  page = "https://swapi.py4e.com/api/people/",
}

const App = () => {
  const [data, setData] = useState<Result>();

  const getFetchedData = () => {
    axios
      .get(Url.page)
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFetchedData();
  }, []);

  return (
    <div>
      <ul>
        {data?.results.map((result) => (
          <li key={result.name}>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${result.url
                .replace(Url.page, "")
                .replace("/", "")}.jpg`}
            ></img>
            {result.name} {result.height} {result.mass} {result.gender}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
