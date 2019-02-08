import React from "react";
import cardArray from "../cardlist";

const Card = props => {
  const number = props.number;
  return (
    <div>
      {number >= 0 ? (
        <img
          className="card"
          src={`/img/${cardArray[number][0]}.svg`}
          alt="ten clubs"
        />
      ) : null}
    </div>
  );
};

export default Card;
