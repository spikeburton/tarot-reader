const SUITS = ['cups', 'pentacles', 'swords', 'wands'];

function deal() {
  function card() {
    let num = Math.floor(Math.random() * 14) + 1;
    switch(num) {
      case 1:
        return "Ace";
      case 11:
        return "Page";
      case 12:
        return "Knight";
      case 13:
        return "Queen";
      case 14:
        return "King";
      default:
        return num;
    }
  }
  
  function suit() {
    return SUITS[Math.floor(Math.random() * 4)];
  }
  
  function reversed() {
    return Math.random() > 0.7 ? true : false;
  }
  
  for(let i = 0; i < 3; i++) {
    document.getElementById(`num_${i+1}`).innerHTML = card() + " of";
    document.getElementById(`suit_${i+1}`).innerHTML = suit();
    if(reversed()) {
      document.getElementById(`suit_${i+1}`).innerHTML += " (reversed)"
    }
  }
  
//  document.getElementById("one_num").innerHTML = card() + " of";
//  document.getElementById("one_suit").innerHTML = suit();
//  if(reversed()) {
//    document.getElementById("one_suit").innerHTML += " (reversed)"
//  }
//  document.getElementById("two_num").innerHTML = card() + " of";
//  document.getElementById("two_suit").innerHTML = suit();
//  document.getElementById("three_num").innerHTML = card() + " of";
//  document.getElementById("three_suit").innerHTML = suit();
}