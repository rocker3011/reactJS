import React, { useState } from "react";
import Button from "../src/Button";
import "./App.css";

const App = () => {
  const [todoTasks, setTodoTasks] = useState<string[]>([]);
  const [product, setProduct] = useState<string>("")

  const addToList = (item: string) => {
    setTodoTasks([...todoTasks, item]);
  };
  const newProduct = (event: any) => {
    setProduct(event.target.value)
  }

  return (
    <>
      <input type="text" onChange={newProduct} />
      <Button title="Add new" onClick={() => addToList(product)} />
      Your list:
      <div>
        {todoTasks.map((item, index) => (
          <h1> {item} </h1>
        ))}
      </div>
    </>
  );
};

export default App;
