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
    <div className="colorPicker">
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
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="AntiqueWhite">AntiqueWhite</option>
          <option value="Aquamarine">Aquamarine</option>
          <option value="BlanchedAlmond">BlanchedAlmond</option>
          <option value="Maroon">Maroon</option>
          <option value="Yellow">Yellow</option>
          <option value="MediumPurple">MediumPurple</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ColorPicker;
