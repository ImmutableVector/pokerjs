import Hand from '../src/hand'
import Card from '../src/card'
import { expect } from 'chai'

describe('hand.js', () => {
  it('should identify a flush', () => {
    var hand = new Hand([
      new Card('Ace', 'Spades'),
      new Card('Four', 'Spades'),
      new Card('Seven', 'Spades'),
      new Card('Ten', 'Spades'),
      new Card('Jack', 'Spades')
    ])

    expect(hand.isFlush()).to.equal(true)
  }),
  it('should not falsely identify a flush', () => {
    var hand = new Hand([
      new Card('Ace', 'Spades'),
      new Card('Four', 'Spades'),
      new Card('Seven', 'Spades'),
      new Card('Ten', 'Spades'),
      new Card('Jack', 'Hearts')
    ])
    expect(hand.isFlush()).to.equal(false)
  }),
  it('should identify a normal straight', () => {
    var hand = new Hand([
      new Card('Two', 'Spades'),
      new Card('Three', 'Spades'),
      new Card('Four', 'Spades'),
      new Card('Five', 'Spades'),
      new Card('Six', 'Hearts')
    ])
    expect(hand.isStraight()).to.equal(true)
  }),
  it('should identify an ace low straight', () => {
    var hand = new Hand([
      new Card('Ace', 'Hearts'),
      new Card('Two', 'Spades'),
      new Card('Three', 'Spades'),
      new Card('Four', 'Spades'),
      new Card('Five', 'Spades')
    ])
    expect(hand.isStraight()).to.equal(true)
  }),
  it('should identify an ace High straight', () => {
    var hand = new Hand([
      new Card('Ten', 'Hearts'),
      new Card('Jack', 'Spades'),
      new Card('Queen', 'Spades'),
      new Card('King', 'Spades'),
      new Card('Ace', 'Spades')
    ])
    expect(hand.isStraight()).to.equal(true)
  }),
  it('should not falsely identify a straight', () => {
    var hand = new Hand([
      new Card('Ace', 'Spades'),
      new Card('Four', 'Spades'),
      new Card('Seven', 'Spades'),
      new Card('Ten', 'Spades'),
      new Card('Jack', 'Spades')
    ])

    expect(hand.isStraight()).to.equal(false)
  })
})
