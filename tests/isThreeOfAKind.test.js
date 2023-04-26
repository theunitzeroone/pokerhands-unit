const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('Test that ThreeOfAKind returns truthy if three of a kind', () => {
  let hand = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
});

test('Test that ThreeOfAKind returns falsy if not three of a kind', () => {
  let hand = new Hand('♥9', '♦2', '♣7', '♠3', '♠7');
  expect(CompareHands.isThreeOfAKind(hand)).toBeFalsy();
});

test("Which ThreeOfKind is strongest? Get higher score for that one", () => {
  let hand1 = new Hand('♥7', '♦2', '♣7', '♠3', '♠7');
  let hand2 = new Hand('♥6', '♦2', '♣6', '♠3', '♠6');
  let hand1Score = CompareHands.isThreeOfAKind(hand1);
  let hand2Score = CompareHands.isThreeOfAKind(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});