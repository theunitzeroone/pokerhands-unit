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