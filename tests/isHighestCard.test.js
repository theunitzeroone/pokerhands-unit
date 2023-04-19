const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that HighestCard returns truthy if no other win condition is met', () => {
  let hand = new Hand('♥A', '♦K', '♣10', '♠3', '♠7');
  expect(CompareHands.isHighestCard(hand)).toBeTruthy();
});