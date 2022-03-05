const cardValues = [
  "Ace", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"
]

const cardSuits = [
  "Hearts", "Diamonds", "Clubs", "Spades"
]

class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
    this.cardStr = `${value} of ${suit}`;
  }

  getCardStr() {
     return this.cardStr;
  }

  print() {
     console.log(this.cardStr);
  }
}

class Cards {
  constructor(...args) {
    this._cards = this.getNewDeck();
  }

  length() {
    return this._cards.length;
  }

  getNewDeck() {
    let cards = [];
    cardSuits.forEach( (suit) => {
      cardValues.forEach( (value) => {
        cards.push(new Card(value, suit));
      });
    });
    return cards;
  }

  shuffle() {
    this._cards = this._cards.sort(() => Math.random() - 0.5);
  }

  viewTopCard() {
    return this._cards[this._cards.length-1]
  }

  drawTopCard() {
    return this._cards.pop();
  }

  pickRandomCard() {
    return this._cards[Math.floor(Math.random() * this._cards.length)];
  }

}

module.exports  = {
  Cards
}
