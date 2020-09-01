import React, { FC } from "react";

type PropType = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Register: FC<PropType> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Register;
