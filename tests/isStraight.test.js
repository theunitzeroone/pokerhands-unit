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

test('check that isStraight returns a higher score for a stronger hand', () => {
  let hand1 = new Hand('♣5', '♣6', '♣7', '♣8', '♣9');
  let hand2 = new Hand('♦T', '♦J', '♦Q', '♦K', '♦A');
  let hand1Score = CompareHands.isStraight(hand1);
  let hand2Score = CompareHands.isStraight(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});