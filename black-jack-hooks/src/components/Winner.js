import React from "react";

const Winner = props => {
  return (
    <div className="endgame">
      <h1>{props.message}</h1>
    </div>
  );
};

export default Winner;
