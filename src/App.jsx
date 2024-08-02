import React, { useState, useEffect } from "react";
import Todolist from "./todo";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  // Load items from localStorage on component mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("todoItems")) || [];
    setItems(savedItems);
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    if (inputList.length > 2) {
      setItems([...items, inputList]);
      setInputList("");
    }
  };

  const handleDelete = (id) => {
    setItems(items.filter((_, index) => index !== id));
  };

  const handleClear = () => {
    setItems([]);
  };
  return (
    <>
      <div className="main_div">
        <form onSubmit={(e) => e.preventDefault()} className="center_div">
          <h1>ToDo List</h1>
          <input
            type="text"
            placeholder="Add Items"
            value={inputList}
            onChange={(e) => setInputList(e.target.value)}
          ></input>
          <button type="submit" id="p" onClick={handleAdd}>
            +
          </button>
          <div className="todo_style">
            <button type="submit" className="fa_times" onClick={handleClear}>
              xAx
            </button>
          </div>

          <ol>
            {items.map((item, index) => {
              return (
                <Todolist
                  key={index}
                  id={index}
                  text={item}
                  onSelect={handleDelete}
                />
              );
            })}
          </ol>
        </form>
      </div>
    </>
  );
};

export default App;
