import React, { Component } from 'react';
import './Api.css'

class Api extends Component {
  constructor() {
    super();
    this.state = {
      userData: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          userData: data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: error.message,
        });
      });
  }

  render() {
    const { userData, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
       
        <div className='card'>
          {userData.map((user) => (
             <center className='main' >
            <img className='img' src={user.avatar_url} alt="" />
            <h1 className='id'>Id: <span id="name">{user.id}</span></h1>
            <div>
           <h1 className='name' key={user.id}>Name: <span id="name">{user.login}</span></h1>
           <h1 className='name' key={user.id}>Name: <span id="name">{user.login}</span></h1>
               </div>
            </center>
          ))}
        </div>
      </div>
     

    );
  }
}
