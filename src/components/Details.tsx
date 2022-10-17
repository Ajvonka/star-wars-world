import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  name: string;
  height: string;
  mass: string;
  gender: string;
};

const Details: FC<Props> = ({ name, height, mass, gender }) => {
  return (
    <div className="card-item-details">
      <div className="card-item-details-name">{name.toUpperCase()}</div>

      <div className="card-item-details-info">
        <div>
          Height:{" "}
          {height === "unknown" || height === "n/a" ? (
            <FontAwesomeIcon icon="circle-question" />
          ) : (
            height
          )}
        </div>
        <div>
          Mass:{" "}
          {mass === "unknown" || mass === "n/a" ? (
            <FontAwesomeIcon icon="circle-question" />
          ) : (
            mass
          )}
        </div>
        <div>
          Gender:{" "}
          {gender === "unknown" || gender === "n/a" ? (
            <FontAwesomeIcon icon="circle-question" />
          ) : (
            gender
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
