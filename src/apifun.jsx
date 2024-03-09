import React, { useEffect, useState } from "react";

const Apifun = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <>
     <main>

        {user && user.length > 0 && user.map((userObj, index) => (
            
            <>

            <img src={userObj.image} alt="" />
            
            </>

          ))}

    </main>
    </>
  )
}

export default Apifun