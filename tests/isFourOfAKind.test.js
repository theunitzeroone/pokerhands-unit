const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that FourOfAKind returns truthy if four of a kind', () => {
  let hand = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
  expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});

test('Test that FourOfAKind returns falsy if not four of a kind', () => {
  let hand = new Hand('♥7', '♦7', '♣3', '♠3', '♠7');
  expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});

test("Which FourOfAKind is strongest? Get higher score for that one", () => {
  let hand1 = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
  let hand2 = new Hand('♥6', '♦6', '♣6', '♠3', '♠6');
  let hand1Score = CompareHands.isFourOfAKind(hand1);
  let hand2Score = CompareHands.isFourOfAKind(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});