import React, { useState, useEffect } from "react";
import "./Api.css";

function Api2() {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const prei = (event) => {
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
                    .filter(user => user.category.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map(user => (
                        <div key={user.id} className="main">
                            <img className="img" src={user.image} alt={user.title} />
                           
                            <div>
                                <h1 className="id">Id: <span>{user.id}</span></h1>
                                <h1 className="name">Price: <span>{user.price} &#8377;</span></h1>
                                <h1 className="name">Category: <span>{user.category}</span></h1>
                                <h1 className="name">Rating: <span>{user.rating.rate} ❤️❤️❤️</span></h1>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Api2;
