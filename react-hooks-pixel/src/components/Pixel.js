import React from "react";

const Pixel = props => {
  const changeColor = event => {
    console.log((event.target.style.background = `${props.getColor}`));
  };

  return (
    <div
      onClick={changeColor}
      className="pixel"
      style={{ background: `${props.color}` }}
    />
  );
};

export default Pixel;
