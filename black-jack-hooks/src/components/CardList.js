import React from "react";
import Card from "./Card";

const CardList = props => {
  return (
    <div className="cardlist">
      {props.cards.map(card => (
        <Card number={card} />
      ))}
    </div>
  );
};

export default CardList;
