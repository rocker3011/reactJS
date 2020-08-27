import React from "react";

const Button = ({ title, onClick }: { title: string; onClick: any }) => {
    console.log(title);
    return <button onClick={onClick} placeholder="write your product">  {title} </button>;
};

export default Button;
