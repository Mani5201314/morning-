import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Add = () => {
  let [value, setvalue] = useState({ name: "", email: "", id: "" });

  let change = e => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  function send(e) {
    e.preventDefault();
    axios.post("http://localhost:4000/users", value).then(res => {
      navigate("/");
    });
  }

  return (
    <div>
      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          id=""
          onChange={change}
          value={value.name}
        />{" "}
        <br />
        <label htmlFor="">Password</label>
        <input
          type="text"
          name="email"
          id=""
          onChange={change}
          value={value.email}
        />{" "}
        <br />
        <button onClick={send}>Submit</button>
      </div>
    </div>
  );
};

export default Add;
