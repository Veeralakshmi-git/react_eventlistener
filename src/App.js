import React from 'react';
import './style.css';

export default function App() {
  function handleClick() {
    console.log('you clicked');
  }
  function handleOnMouseOver() {
    console.log('mouseover');
  }
  return (
    <div className="container">
      <img
        className="cont-image"
        src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
        alt=""
        onMouseOver={handleOnMouseOver}
      />
      <button className="cont-button" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}
