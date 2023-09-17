import React, { useState } from "react";
import Todolist from "./todo";

const App = () => {
  const [Inputlist, setInputlist] = useState("");
  const [items, setitems] = useState([]);

  const add = (event) => {
    setInputlist(event.target.value);
  };
  const list = () => {
    if (Inputlist.length > 2) {
      setitems((olditems) => {
        return [...olditems, Inputlist];
      });
      setInputlist("");
    }
    // {document.getElementById('clear').value=''}
  };
  const del = () => {
    return setitems([]);
  };
  const all = (id) => {
    setitems((olditems) => {
      return olditems.filter((arr, index) => {
        return index === id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <form onSubmit={(e)=>e.preventDefault()}  className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            id="clear"
            type="text"
            placeholder="Add Items"
            value={Inputlist}
            onChange={add}
          ></input>
          <button type="submit" id="p" onClick={list}>
            +
          </button>
          <div className="todo_style">
            <button type="submit" className="fa_times" onClick={all}>
              xAx
            </button>
          </div>

          <ol>
            {items.map((itemval, index) => {
              return (
                <Todolist
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={del}
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
