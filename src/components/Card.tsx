import CardItem from "./CardItem";
import { IResult } from "../interfaces/app_interface";
import { FC } from "react";

type Props = {
  data: IResult | undefined;
};

const Card: FC<Props> = (props) => {
  return (
    <div>
      <ul>
        {props.data?.results.map((result) => (
          <li key={result.name}>
            <CardItem {...result} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
