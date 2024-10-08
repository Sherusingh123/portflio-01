import React from "react";

function Button({ text, bgColor, textColor = () => {} }) {
  return (
    <button
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full reative z-10`}
    >
      {text}
    </button>
  );
}

export default Button;
