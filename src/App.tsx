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
  firstPage = "https://swapi.py4e.com/api/people/?page=1",
}

const App = () => {
  const [data, setData] = useState<Result>();
  const [currentPage, setCurrentPage] = useState<string>(Url.firstPage);

  const getFetchedData = () => {
    axios
      .get(currentPage)
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
  }, [currentPage]);

  const onNextClick = () => {
    const next = data?.next;
    if (next != null) {
      setCurrentPage(next);
    } else {
      throw new Error("It should not happen! Button should be disabled.");
    }
  };

  const onPrevClick = () => {
    const previous = data?.previous;
    if (previous != null) {
      setCurrentPage(previous);
    } else {
      throw Error("It should not happen! Button should be disabled.");
    }
  };

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
      <button onClick={onPrevClick} disabled={data?.previous === null}>
        Previous
      </button>
      <button onClick={onNextClick} disabled={data?.next === null}>
        Next
      </button>
    </div>
  );
};

export default App;
