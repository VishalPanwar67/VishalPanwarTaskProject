import React from "react";
import "./Button.css";

// We pass "text", "onClick", and "type" (primary/secondary) as props
const Button = ({ text, onClick, type = "primary" }) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
