import React from "react";

const Player = props => {
  const handleBeginClick = () => {
    props.addCardBack();
    props.addNewDealerCard();
    props.addNewPlayerCard();
  };

  return (
    <div>
      <div className="player">{props.children}</div>
      <div className="table">
        <button className="btn-begin" onClick={handleBeginClick}>
          Begin
        </button>
        <button onClick={props.addNewPlayerCard} className="btn">
          Hit
        </button>
        <button onClick={props.stay} className="btn">
          Stay
        </button>
      </div>
    </div>
  );
};

export default Player;
