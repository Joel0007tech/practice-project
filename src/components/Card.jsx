import React from "react";

function changeColor() {
  var colors = ["red", "green", "blue", "orange", "purple"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("my-text").style.color = randomColor;
}
  
  setInterval(changeColor, 1000); // Change color every 1 second

const Card = () => {
  return (
    <div>
       <p id="my-text">Your text here</p>

    </div>
   
  );
};

export default Card;
