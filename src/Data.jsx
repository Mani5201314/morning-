import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Data = () => {
  let [x, usex] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/users").then(res => {
      usex(res.data);
    });
  });

  return (
    <div>
      <Link to="/add">ADD</Link>

      {x.map(hi => {
        return (
          <>
            <h1>{hi.id}</h1>
            <h1>{hi.name}</h1>
          </>
        );
      })}
    </div>
  );
};

export default Data;
