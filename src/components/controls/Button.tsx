import { MouseEventHandler } from "react";

interface ButtonProps {
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  title: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};

export default Button;
