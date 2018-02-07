console.log("JS loaded");

var suits = ["pade", "diamond", "clubs", "heart"];
var value = [ "a", "2", "3","4" , "5", "6","7","8", "9","10","J","Q","K"];

var suitIndex = 0;
var valueIndex = 0;

//Hold out cards
var deck = [];

//Outer look - suits
while (suitIndex < suits.length) {
    while (valueIndex < value.length) {
        valueIndex += 1;   
    }
  //console.log("suiteIndex = " + suitIndex +", valueIndex = "+ valueIndex ")
  //console.log("suitIndex = %d, valueIndex = %d" , suitIndex, valueIndex);
  deck.push({
      suit: suits[suitIndex],
      value: value[valueIndex]
  })
  valueIndex += 1;
}
suitIndex += 1 ;

console.log(deck);
