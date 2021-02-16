import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMovies from "./searchMovies.js"

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovies />
      </div>
    )
  }
}

export default App;
