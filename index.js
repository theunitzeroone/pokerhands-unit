const DeckOfCards = require('./DeckOfCards');
const Hand = require('./Hand');
const CompareHands = require('./CompareHands');
const { scoreWithKickers } = require('./CompareHands');
const { sortByRank } = require('./CompareHands');

// ♥♦♣♠

let hand1 = new Hand('♥9', '♥T', '♣J', '♥Q', '♥K');
let hand2 = new Hand('♣9', '♥9', '♣J', '♦K', '♣K');
console.log(CompareHands.compare(hand1, hand2));

// let aHand = new Hand('♥9', '♥T', '♥J', '♦J', '♠9');
// console.log(CompareHands.rankOccurences(hand1, hand2));
// console.log(CompareHands.rankOccurences(hand2));
// console.log(hand2);
//console.log(CompareHands.compare(hand1, hand2));
//console.log(CompareHands.isStraight(hand2));