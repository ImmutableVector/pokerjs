export default class Hand {
  /**
   * @constructor
   * @param {array} cards
   * A list of card objects
   **/
  constructor(cards) {
    this.cards = cards
  }
  /**
   * A flush is when all of the cards are the same suit. I.e. each card's suit is 'Spades'
   **/
  isFlush () {
    var suit = this.cards[0].suit;
    for (var i = 1; i < this.cards.length; i++){
      if (suit !== this.cards[i].suit){
        return false;
      }
    }
    return true;
  }
  /**
   * A straight is when all of the cards are in order. I.e. ['Two', 'Three', 'Four', 'Five', 'Six'].
   * The trick here is that an 'Ace' can either be a 'One' or higher than a King
   **/
  isStraight () {
    let cards = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
    var leadingAce = 0;

    if (cards.indexOf(this.cards[0].card) === 12) {
      if (cards.indexOf(this.cards[1].card !== 2)){
        return false;
      }

      leadingAce = 1;
    }

    for (var i = leadingAce; i < this.cards.length - 1; i++){
      if ((cards.indexOf(this.cards[i].card) + 1) !== cards.indexOf(this.cards[i + 1].card)){
        return false;
      }
    }

    return true;
  }
}
