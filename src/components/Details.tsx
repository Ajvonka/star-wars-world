import { FC } from "react";

type Props = {
  name: string;
  height: string;
  mass: string;
  gender: string;
};

const Details: FC<Props> = ({ name, height, mass, gender }) => {
  return (
    <div>
      {name} {height} {mass} {gender}
    </div>
  );
};

export default Details;
