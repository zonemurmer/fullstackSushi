import React, { Component } from 'react';

import Navbar from './components/navbar';
import Card from './components/card';

import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';
import philadelphia from './images/philadelphia.png';

class App extends Component {
  state = {
    cards: [
      {id: 0, nome: "California", prezzo: 1.99, immagine: california, quantità: 0 },
      {id: 1, nome: "Dragon", prezzo: 3.49, immagine: dragon, quantità: 0 },
      {id: 2, nome: "Dynamite", prezzo: 2.49, immagine: dynamite, quantità: 0 },
      {id: 3, nome: "Philadelphia", prezzo: 0.99, immagine: philadelphia, quantità: 0 },
      {id: 4, nome: "Rainbow", prezzo: 2.99, immagine: rainbow, quantità: 0 },
      {id: 5, nome: "Shrimp", prezzo: 1.49, immagine: shrimp, quantità: 0 },
    ]
  }

  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards });
  }

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantità++;
    this.setState({ cards });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className='row'>  
            {this.state.cards.map(card => (
              <Card
                key = {card.id}
                onDelete = {this.handleDelete}
                onIncrement = {this.handleIncrement}
                card={card}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
