import React from "react";
import "./button.css";

const Button = ({generateRandomIcon}) => {
  const handleClickOnButton = () => {
    setTimeout(() => {
      generateRandomIcon()  
    },3000)
  };

  return (
    <button className="button" onClick={handleClickOnButton}>
      Show random Icon
    </button>
  );
};

export { Button };
