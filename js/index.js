// Define constants for the suits and the Major/Minor Arcana
const SUITS = ['cups', 'pentacles', 'swords', 'wands'];
const MINOR_ARCANA = ['Ace',2,3,4,5,6,7,8,9,10,'Page','Knight','Queen','King'];
const MAJOR_ARCANA = [
  'The Fool','The Magician','The High Priestess','The Empress',
  'The Emperor','The Hierophant','The Lovers','The Chariot',
  'Strength','The Hermit','Wheel of Fortune','Justice',
  'The Hanged Man','Death','Temperance','The Devil',
  'The Tower','The Star','The Moon','The Sun',
  'Judgement','The World'
]
var DECK = [];

// Build the Minor Arcana deck
for(let i = 0; i < SUITS.length; i++) {
  for(let j = 0; j < MINOR_ARCANA.length; j++) {
    let card = {
      value: MINOR_ARCANA[j],
      suit: SUITS[i],
      minor: true
    }
    DECK.push(card);
  }
}

// Build the Major Arcana deck
for(let i = 0; i < MAJOR_ARCANA.length; i++) {
  let card = {
    value: i,
    suit: MAJOR_ARCANA[i],
    minor: false
  }
  DECK.push(card);
}

function deal() {
  // Shuffle the DECK!
  // Swap the location of 2 random cards 1200 times for good measure
  for(let i = 0; i < 1200; i++) {
    let card1 = Math.floor(Math.random() * DECK.length);
    let card2 = Math.floor(Math.random() * DECK.length);

    let tmp = DECK[card1];
    DECK[card1] = DECK[card2];
    DECK[card2] = tmp;
  }
  
  // Is the card upright or reversed?
  // Make sure there is a higher probability of the card being upright
  function reversed() {
    return Math.random() > 0.7 ? true : false;
  }
  
  // Fill the HTML with the content
  for(let i = 0; i < 3; i++) {
    // if a card from the Minor Arcana, display the value at the top
    // and the suit at the bottom of the card
    if(DECK[i].minor) {
      document.getElementById(`num_${i+1}`).style.opacity = "1";
      document.getElementById(`num_${i+1}`).innerHTML = DECK[i].value + " of";
    } else {
    // otherwise it's a card from the Major Arcana
    // display an opaque card number at the top
    // display the card title at the bottom
      document.getElementById(`num_${i+1}`).style.opacity = "0.7";
      document.getElementById(`num_${i+1}`).innerHTML = DECK[i].value;
    }
    document.getElementById(`suit_${i+1}`).innerHTML = DECK[i].suit;
    // if the card is reversed, display that on the card
    if(reversed()) {
      document.getElementById(`rev_${i+1}`).innerHTML = "(reversed)";
      // document.getElementById(`card_${i+1}`).style.transform = "rotate(180deg)";
      // --- come back to this ---
    } else {
      document.getElementById(`rev_${i+1}`).innerHTML = "";
    }
  }
}