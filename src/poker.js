import Card from './card'
import Hand from './hand'
let suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
let cards = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace']
let deck = []
suits.forEach(function(suit){
  cards.forEach(function(card){
    deck.push(new Card(card, suit))
  })
})
let hand = new Hand(deck.sort(() => .5 - Math.random()).slice(0,5))
console.log(hand)
