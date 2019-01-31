import React, { useState } from "react";
import Form from "./components/Form";
import Cardlist from "./components/Cardlist";

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  };

  return (
    <div>
      <header>
        <Form onSubmit={addNewCard} />
      </header>
      <div className="container">
        <Cardlist cards={cards} />
      </div>
    </div>
  );
};

export default App;
