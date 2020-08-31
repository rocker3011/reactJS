import React, { FC } from "react";

type PropType = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: FC<PropType> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
