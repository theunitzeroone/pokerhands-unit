const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isStraightFlush returns truthy if straightflush', () => {
  let hand = new Hand('♥9', '♥8', '♥7', '♥5', '♥6');
  expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
});

test('check that isStraightFlush returns falsy if not straightflush', () => {
  let hand = new Hand('♥A', '♥8', '♥7', '♥5', '♥6');
  expect(CompareHands.isStraightFlush(hand)).toBeFalsy();
});

test('check that isStraightFlush returns a higher score for a stronger hand', () => {
  let hand1 = new Hand('♣5', '♣6', '♣7', '♣8', '♣9');
  let hand2 = new Hand('♦T', '♦J', '♦Q', '♦K', '♦A');
  let hand1Score = CompareHands.isStraightFlush(hand1);
  let hand2Score = CompareHands.isStraightFlush(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});