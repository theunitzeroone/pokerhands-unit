const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that Straight returns truthy if straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  expect(CompareHands.isStraight(hand)).toBeTruthy();
});

test('check that Straight returns falsy if straight', () => {
  let hand = new Hand('♥9', '♦Q', '♣7', '♥5', '♦6');
  expect(CompareHands.isStraight(hand)).toBeFalsy();
});