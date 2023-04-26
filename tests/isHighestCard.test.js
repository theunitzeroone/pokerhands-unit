const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that HighestCard returns truthy if no other win condition is met', () => {
  let hand = new Hand('♥A', '♦K', '♣10', '♠3', '♠7');
  expect(CompareHands.isHighestCard(hand)).toBeTruthy();
});

test('check that isHighestCard returns a higher score for a stronger hand', () => {
  let hand1 = new Hand('♣2', '♣6', '♣4', '♣8', '♣7');
  let hand2 = new Hand('♦T', '♦9', '♦5', '♦Q', '♦A');
  let hand1Score = CompareHands.isHighestCard(hand1);
  let hand2Score = CompareHands.isHighestCard(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});