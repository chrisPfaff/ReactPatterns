import React from "react";

const Player = props => {
  const handleBeginClick = () => {
    props.addNewDealerCard();
    props.addNewPlayerCard();
  };

  return (
    <div>
      <div className="player">{props.children}</div>
    </div>
  );
};

export default Player;
