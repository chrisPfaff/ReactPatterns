import React from "react";
import Card from "./Card.js";

const Cardlist = props => (
  <div className="cardList">
    {props.cards.map(card => (
      <Card {...card} />
    ))}
  </div>
);

export default Cardlist;
