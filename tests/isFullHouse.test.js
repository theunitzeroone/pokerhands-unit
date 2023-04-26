const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that FullHouse returns truthy if FullHouse, pair + three of a kind', () => {
  let hand = new Hand('♥7', '♦3', '♣7', '♠3', '♠7');
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

test('Test that FullHouse returns falsy if FullHouse is incomplete', () => {
  let hand = new Hand('♥7', '♦3', '♣5', '♠3', '♠7');
  expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});

test('check that isFullHouse returns a higher score for a stronger hand', () => {
  let hand1 = new Hand('♣2', '♥2', '♦2', '♦7', '♣7');
  let hand2 = new Hand('♣5', '♥5', '♦5', '♣A', '♦A');
  let hand1Score = CompareHands.isFullHouse(hand1);
  let hand2Score = CompareHands.isFullHouse(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});