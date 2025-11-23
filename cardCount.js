let count = 0;

//Accepts card as number or string and updates count.
//If the count is greater than 0 than the function returns the number plus " Bet"
//If the count is less than 1 the function will return the number plus " Hold"
function cc(card) {
  if (card >= 2 && card <= 6) {
  count += 1;
  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
  count -= 1;
  } else {
  } if (count >= 1) {
    return count + " Bet";
  } else if (count <= 0) {
    return count + " Hold";
  }
}

console.log(cc(2));
//1 Bet
console.log(cc(4));
//2 Bet
console.log(cc("J"));
//1 Bet
console.log(cc(10));
//0 Hold
