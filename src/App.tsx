import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import SearchField from "./components/controls/SearchField";
import { IResult } from "./interfaces/app_interface";
import { Url } from "./enums/app_enums";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

const App = () => {
  const [data, setData] = useState<IResult>();
  const [currentPage, setCurrentPage] = useState<string>(Url.FirstPage);

  const setPage = (value: string): void => {
    setCurrentPage(value);
  };

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

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(`${Url.Page}?search=${e.target.value}`);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="search-container">
          <SearchField onChange={handleSearch} />
        </div>
        <Pagination props={data} setPage={setPage} />
        <Card data={data}></Card>
        <Pagination props={data} setPage={setPage} />
      </div>
    </div>
  );
};

export default App;
