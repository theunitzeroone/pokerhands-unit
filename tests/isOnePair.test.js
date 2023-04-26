const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that OnePair returns truthy if one pair', () => {
  let hand = new Hand('♥A', '♦A', '♣10', '♠3', '♠7');
  expect(CompareHands.isOnePair(hand)).toBeTruthy();
});

test('Test that OnePair returns falsy if no pair exists', () => {
  let hand = new Hand('♥A', '♦9', '♣10', '♠3', '♠7');
  expect(CompareHands.isOnePair(hand)).toBeFalsy();
});

test('check that isOnePair returns a higher score for a stronger hand', () => {
  let hand1 = new Hand('♣2', '♣6', '♦7', '♣8', '♣7');
  let hand2 = new Hand('♦T', '♦9', '♣A', '♦Q', '♦A');
  let hand1Score = CompareHands.isOnePair(hand1);
  let hand2Score = CompareHands.isOnePair(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});