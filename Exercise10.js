var card1 = parseInt(prompt("Enter a number 2-11"));
var card2 = parseInt(prompt("Enter another number 2-11"));
var card3 = parseInt(prompt("Enter another number 2-11"));
var cardSum = card1 + card2 + card3;

if(cardSum == 21){
    console.log("BLACKJACK");
}else if(cardSum < 21){
    console.log("Your total is : " + cardSum);

}else if(cardSum > 21){
    console.log("BUST")
}else{
    console.log("ERROR");
}