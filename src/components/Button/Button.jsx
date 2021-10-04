import React, { useState } from "react";
import "./Button.css";

function Button() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(true);
  const buttonText = disabled ? "gray" : buttonColor === "red" ? "blue" : "red";

  const changeButtonColor = () => {
    if (buttonColor === "red") {
      setButtonColor("blue");
    } else {
      setButtonColor("red");
    }
  };

  const toggleCheckbox = (e) => {
    setDisabled(e.target.checked);
  };

  return (
    <div className="">
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={changeButtonColor}
        disabled={disabled}
      >
        Change to {buttonText}
      </button>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        defaultChecked={disabled}
        onChange={toggleCheckbox}
      />
    </div>
  );
}

export default Button;
