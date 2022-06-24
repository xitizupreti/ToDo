import React, { useState } from "react";

const App = () => {
  const [fullname, setfullname] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const e = (event) => {
    const { value, name } = event.target;

    setfullname((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // }
      // else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // }
      // else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   };
      // }
      // else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   };
      // }
    });
  };

  const done = (event) => {
    event.preventDefault();
    alert("submitted");
  };

  return (
    <>
      <form onSubmit={done}>
        <div>
          <h1>
            Hello {fullname.fname} {fullname.lname}
          </h1>
          <p>{fullname.email}</p>
          <p>{fullname.phone}</p>
          <input
            type="text"
            placeholder="Enter your name"
            name="fname"
            onChange={e}
            value={fullname.fname}
            autoComplete="off"
          ></input>
          <input
            type="text"
            placeholder="Enter your pw"
            name="lname"
            onChange={e}
            value={fullname.lname}
            autoComplete="off"
          ></input>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={e}
            value={fullname.email}
            autoComplete="off"
          ></input>
          <input
            type="number"
            placeholder="Enter your pno"
            name="phone"
            onChange={e}
            value={fullname.phone}
            autoComplete="off"
          ></input>
          <button>Click Me ❤️</button>
        </div>
      </form>
    </>
  );
};

// ... => spread operator to call whole array

export default App;
