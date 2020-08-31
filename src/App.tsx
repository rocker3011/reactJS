/* eslint-disable react/jsx-key */
import React, { useState, FC } from "react";
import Button from "../src/Button";
import Element from "../src/Element";
import "./App.css";

const App: FC = () => {
  const [todoTasks, setTodoTasks] = useState<string[]>([]);
  const [product, setProduct] = useState<string>("");

  const addToList = (item: string): void => {
    setTodoTasks([...todoTasks, item]);
  };
  const newProduct = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setProduct(event.target.value);
  };

  const removeFromList = (idx: number): void => {
    setTodoTasks(
      todoTasks.filter((item: string, index: number) => {
        if (index == idx) return false;
        return true;
      })
    );
  };

  const editElement = (product: string, idx: number): void => {
    setTodoTasks(
      todoTasks.map((item: string, index: number) => {
        if (index == idx) return product;
        return item;
      })
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder="write your product"
        onChange={newProduct}
      />
      <Button title="Add new" onClick={(): void => addToList(product)} />
      Your list:
      <ul>
        {todoTasks.map((item: string, index: number) => {
          return (
            <li key={`product-${index}`}>
              {" "}
              <Element
                item={item}
                onClickEdit={(): void => editElement(product, index)}
                onClickDelete={(): void => removeFromList(index)}
              />{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
