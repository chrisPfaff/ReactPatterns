import React, { useState } from "react";

import CardList from "../src/components/CardList";
import Player from "../src/components/Player";
import Dealer from "../src/components/Dealer";
import cardArray from "./cardlist";

import "./styles.scss";

function App() {
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);

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
      alert("Player has won");
    } else {
      alert("Dealer has won");
    }
  };

  return (
    <div className="App">
      <header className="App-header">Black Jack</header>
      <Dealer>
        <CardList cards={dealerCards} />
      </Dealer>
      <Player
        addNewPlayerCard={addNewPlayerCard}
        addNewDealerCard={addNewDealerCard}
        addCardBack={addCardBack}
        stay={stay}
      >
        <CardList cards={playerCards} />
      </Player>
    </div>
  );
}

export default App;
