import React, { useState } from "react";

import CardList from "../src/components/CardList";
import Player from "../src/components/Player";
import Dealer from "../src/components/Dealer";
import Winner from "../src/components/Winner";

import cardArray from "./cardlist";

import "./styles.scss";

function App() {
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [winner, SetWinner] = useState(0);

  const addNewPlayerCard = () => {
    let num = Math.floor(Math.random() * 52);
    if (num === 0) {
      num = Math.floor(Math.random() * 52);
    }
    setPlayerCards(playerCards.concat(num));
  };

  const addNewDealerCard = () => {
    let num = Math.floor(Math.random() * 52);
    if (num === 0) {
      num = Math.floor(Math.random() * 52);
    }
    setDealerCards(dealerCards.concat(num));
  };

  const handleBeginClick = () => {
    addNewDealerCard();
    addNewPlayerCard();
  };

  const addCardBack = () => {
    setDealerCards(dealerCards.concat(0));
  };

  const stay = () => {
    let player = playerCards.reduce((acc, item) => {
      return cardArray[acc][1] + cardArray[item][1];
    });
    let dealer = dealerCards.reduce((acc, item) => {
      return cardArray[acc][1] + cardArray[item][1];
    });
    if (player > dealer) {
      SetWinner("The Player has won");
    } else {
      SetWinner("The Dealer has won");
    }
  };

  return (
    <div className="App">
      <header className="App-header">Black Jack</header>
      {winner === 0 ? (
        <div className="container">
          <div className="coaster" />
          <img
            className="cocktail"
            src={"./img/cocktail.svg"}
            alt="cocktail glass"
          />
          <Dealer>
            <CardList cards={dealerCards} />
          </Dealer>
          <Player>
            <CardList cards={playerCards} />
          </Player>{" "}
          <footer className="table">
            <button className="btn-begin" onClick={handleBeginClick}>
              Begin
            </button>
            <button onClick={addNewPlayerCard} className="btn">
              Hit
            </button>
            <button onClick={stay} className="btn">
              Stay
            </button>
          </footer>
        </div>
      ) : (
        <Winner message={winner} />
      )}
    </div>
  );
}

export default App;
