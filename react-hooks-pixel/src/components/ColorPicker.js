import React, { useState } from "react";

const ColorPicker = props => {
  const [color, selectColor] = useState("");

  const HandleColor = event => {
    selectColor(event.target.value);
  };
  const changeColorInPixel = e => {
    e.preventDefault();
    props.changeColor(color);
  };
  return (
    <div>
      <form onSubmit={changeColorInPixel}>
        <select
          onChange={HandleColor}
          value={color}
          name="color"
          id="colorSelect"
        >
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="crimson">Crimson</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ColorPicker;
