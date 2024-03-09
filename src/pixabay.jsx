import React, { useState, useEffect } from "react";
import "./pixabay.css";
function Pixabay() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=41597445-9c8b0f27ec1f68133a6c5e9ae&q=${searchQuery}&image_type=photo&pretty=true`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUsers(data.hits);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const prei = event => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <input
        type="search"
        placeholder="Search products..."
        value={searchQuery}
        onChange={prei}
        className="search-input"
        id="search"
      />
      <div className="card">
        {users
          .filter(user =>
            user.tags.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(user => (
            <div key={user.id} className="main">
              <img className="img" src={user.webformatURL} alt={user.tags} />
              <div>
                <h1 className="id">
                  Id: <span>{user.id}</span>
                </h1>
                <h6 className="id">
                  Tags: <span>{user.tags}</span>
                </h6>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Pixabay;
