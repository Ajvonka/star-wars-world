import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-common-types";

interface ButtonProps {
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  title?: string;
  icon?: IconName;
  type?: "sm" | "lg";
}

const Button = (props: ButtonProps) => {
  let icon;
  if (props.icon) {
    icon = <FontAwesomeIcon icon={props.icon} />;
  }
  return (
    <button
      className={`${props.className ? props.className : "btn-primary"}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {icon}
      <span className={`${props.type === "sm" ? "btn-sm-title" : "visible"}`}>
        {" "}
        {props.title}
      </span>
    </button>
  );
};

export default Button;
