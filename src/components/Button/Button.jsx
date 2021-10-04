import React, { useState } from "react";
import "./Button.css";

function Button() {
  const [buttonColor, setButtonColor] = useState("red");
  const buttonText = buttonColor === "red" ? "blue" : "red";

  const changeButtonColor = () => {
    if (buttonColor === "red") {
      setButtonColor("blue");
    } else {
      setButtonColor("red");
    }
  };

  return (
    <div className="">
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={changeButtonColor}
      >
        Change to {buttonText}
      </button>
    </div>
  );
}

export default Button;
