import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import SearchField from "./components/controls/SearchField";
import Button from "./components/controls/Button";
import { IResult } from "./interfaces/app_interface";
import { Url } from "./enums/app_enums";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState<IResult>();
  const [currentPage, setCurrentPage] = useState<string>(Url.FirstPage);

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

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(`${Url.Page}?search=${e.target.value}`);
  };

  return (
    <div>
      <SearchField onChange={handleSearch} />
      <Card data={data}></Card>
      <Button
        className="btn-primary"
        onClick={onPrevClick}
        disabled={data?.previous === null}
        title="Previous"
      />
      <Button
        className="btn-primary"
        onClick={onNextClick}
        disabled={data?.next === null}
        title="Next"
      />
    </div>
  );
};

export default App;
