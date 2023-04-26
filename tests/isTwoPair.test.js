const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that isTwoPair returns truthy if Two pairs', () => {
  let hand = new Hand('♥7', '♦3', '♣9', '♠3', '♠7');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('Test that isTwoPair returns falsy if not Two pairs', () => {
  let hand = new Hand('♥8', '♦3', '♣9', '♠3', '♠7');
  expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});

test('check that isTwoPair returns a higher score for a stronger hand', () => {
  let hand1 = new Hand('♣6', '♥6', '♣4', '♥8', '♣8');
  let hand2 = new Hand('♦T', '♣T', '♦5', '♥K', '♦K');
  let hand1Score = CompareHands.isTwoPair(hand1);
  let hand2Score = CompareHands.isTwoPair(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});