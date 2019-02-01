import React, { Component, useState } from "react";
import Colors from "../Colors";
import Pixel from "./Pixel";

const Canvas = props => {
  const [matrix, setMatrix] = useState(
    Array(30)
      .fill()
      .map(() =>
        Array(30)
          .fill()
          .map(() => 0)
      )
  );

  const cache = localStorage.getItem("value");

  const checkLocal = () => {
    if (cache) {
      // setMatrix(JSON.parse(cache));
      console.log(cache);
    } else {
      console.log("no storage");
    }
  };

  checkLocal();

  const changeColor = (rowIndex, colIndex) => {
    const newMatrix = JSON.parse(JSON.stringify(matrix));
    newMatrix[rowIndex][colIndex] = props.currentColor;
    localStorage.setItem("value", JSON.stringify(newMatrix));
    setMatrix(newMatrix);
  };

  return (
    <div className={"canvas"}>
      {matrix.map((row, rowIndex) =>
        row.map((_, colIndex) => {
          return (
            <Pixel
              key={`${rowIndex}-${colIndex}`}
              background={Colors[matrix[rowIndex][colIndex]]}
              onClick={e => changeColor(rowIndex, colIndex)}
            />
          );
        })
      )}
    </div>
  );
};

export default Canvas;
