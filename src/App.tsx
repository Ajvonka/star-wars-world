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
    <div className="flex flex-col items-center ">
      <div className="lg:w-4/6 mb-10 w-full">
        <div className="rounded-lg flex search-field h-44 w-full pt-5 mb-10">
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
