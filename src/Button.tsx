import React from "react";

const Button = ({ title, onClick }: { title: string; onClick: any }) => {
  console.log(title);
  return <button onClick={onClick}> {title} </button>;
};

export default Button;
