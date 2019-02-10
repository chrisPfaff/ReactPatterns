import React from "react";

const Player = props => {
  return (
    <div>
      <div className="player">{props.children}</div>
    </div>
  );
};

export default Player;
