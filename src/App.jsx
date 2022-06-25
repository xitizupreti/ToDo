import React, { useState } from "react";
import "./todo";
import Todolist from "./todo";

const App = () => {
  const [Inputlist, setInputlist] = useState("");

  const [items, setitems] = useState([]);

  const add = (event) => {
    setInputlist(event.target.value);
  };
  const list = () => {
    setitems((olditems) => {
      return [...olditems, Inputlist];
    });
    setInputlist("");
    // {document.getElementById('clear').value=''}
  };
  const del=(id)=>{
    setitems((olditems)=>{
      return olditems.filter((arrele,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
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
          <ol>
            {items.map((itemval, index) => {
              return <Todolist key={index} id={index} text={itemval} onSelect={del} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
