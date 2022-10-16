import { IResult } from "../interfaces/app_interface";
import { FC, useState } from "react";
import Button from "./controls/Button";
import { Url } from "../enums/app_enums";

type Props = {
  props: IResult | undefined;
  setPage: (arg: string) => void;
};

const Pagination: FC<Props> = ({ props, setPage }) => {
  const [currentPage, setCurrentPage] = useState<string>(Url.FirstPage);

  const onNextClick = () => {
    const next = props?.next;
    if (next != null) {
      setCurrentPage(next);
      setPage(next);
    } else {
      throw new Error("It should not happen! Button should be disabled.");
    }
  };

  const onPrevClick = () => {
    const previous = props?.previous;
    if (previous != null) {
      setCurrentPage(previous);
      setPage(previous);
    } else {
      throw Error("It should not happen! Button should be disabled.");
    }
  };

  return (
    <div className="pagination">
      <Button
        className="btn-pag sm:w-44 w-20"
        onClick={onPrevClick}
        disabled={props?.previous === null}
        title="Previous Page"
        icon="arrow-left"
        type="sm"
      />
      <Button
        className="btn-pag sm:w-44 w-20"
        onClick={onNextClick}
        disabled={props?.next === null}
        title="Next Page"
        icon="arrow-right"
        type="sm"
      />
    </div>
  );
};

export default Pagination;
