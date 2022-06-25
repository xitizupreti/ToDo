import React from "react";

const Todolist = (props) => {
    const del=()=>{
        
    }
  return (
    <>
      <div className="todo_style">
        <button className="fa_times"  onClick={()=>{
            props.onSelect(props.id);
        }}>x</button>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default Todolist;
