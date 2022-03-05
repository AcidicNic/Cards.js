[![license](https://img.shields.io/badge/license-WTFPL-%23000000)](http://www.wtfpl.net/)
[![npm version](https://img.shields.io/npm/v/@acidicnic/cards?logo=npm)](https://www.npmjs.com/package/@acidicnic/cards)
# Cards.js

A deck of cards

# Install
```bash
npm i @acidicnic/cards
```

# Usage & Examples
```javascript
// Import the package
const { Cards } = require('@acidicnic/cards');

// Creates new ordered deck
let cardDeck = new Cards();

// Shuffle deck
cardDeck.shuffle();

// View cards in deck
console.log(cardDeck._cards);

// Selects random card from deck
cardDeck.pickRandomCard();

// Draws card at the top of the deck and removes it form the deck.
cardDeck.drawTopCard();
```
