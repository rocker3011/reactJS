import React, { FC } from "react";
import Button from "../Button/Button";

type PropType = {
  item: string;
  onClickDelete: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onClickEdit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Element: FC<PropType> = ({ item, onClickDelete, onClickEdit }) => {
  return (
    <>
      {item}
      <Button title="EDIT" onClick={onClickEdit} />
      <Button title="DELETE" onClick={onClickDelete} />
    </>
  );
};

export default Element;
