import { FC } from "react";
import Details from "./Details";
import Avatar from "./Avatar";
import { IPeople } from "../interfaces/app_interface";

const CardItem: FC<IPeople> = ({ url, name, height, mass, gender }) => {
  return (
    <div className="card-item">
      <Avatar url={url} />
      <Details name={name} height={height} mass={mass} gender={gender} />
    </div>
  );
};

export default CardItem;
