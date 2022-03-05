const { Cards } = require('./lib/cards.js');

let cardDeck = new Cards();
console.log(cardDeck._cards);
console.log(`shuffling deck...`);
cardDeck.shuffle();
console.log(cardDeck._cards);

console.log(`pickRandomCard(): ${cardDeck.pickRandomCard().getCardStr()}`);
console.log(`Deck Length: ${cardDeck.length()}\n`);

console.log(`pickRandomCard(): ${cardDeck.pickRandomCard().getCardStr()}`);
console.log(`Deck Length: ${cardDeck.length()}\n`);

console.log(`viewTopCard(): ${cardDeck.viewTopCard().getCardStr()}`);
console.log(`Deck Length: ${cardDeck.length()}\n`);

console.log(`drawTopCard(): ${cardDeck.drawTopCard().getCardStr()}`);
console.log(`Deck Length: ${cardDeck.length()}\n`);

console.log(`viewTopCard(): ${cardDeck.viewTopCard().getCardStr()}`);
console.log(`Deck Length: ${cardDeck.length()}\n`);

console.log(`drawTopCard(): ${cardDeck.drawTopCard().getCardStr()}`);
console.log(`Deck Length: ${cardDeck.length()}\n`);
