import { FC } from "react";
import { Url } from "../enums/app_enums";

type Props = {
  url: string;
};

const Avatar: FC<Props> = ({ url }) => {
  return (
    <div>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${url
          .replace(Url.Page, "")
          .replace("/", "")}.jpg`}
      ></img>
    </div>
  );
};

export default Avatar;
