const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that TwoPair returns truthy if Two pairs', () => {
  let hand = new Hand('♥7', '♦3', '♣9', '♠3', '♠7');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('Test that TwoPair returns falsy if not Two pairs', () => {
  let hand = new Hand('♥8', '♦3', '♣9', '♠3', '♠7');
  expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});