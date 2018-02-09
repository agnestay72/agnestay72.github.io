console.log("day2.js loaded");

var flintstones = ["fred", "barney", "wilma", "pebbles", "betty", "bambam"];

//Task 1
//use while statement to print out the elements of the array 
//one on each line
//it should work with array of *ANY* length;

//Task 2
//filter out 'tiger' from the array

//Task 3 
//Only print out the flintstones - fred, wilma, pebbles

var i = 0;

console.log(">> flintstones: ", flintstones);

while (i < flintstones.length) {
    //if ('tiger' != flintstones[i]) {
    if (flintstones[i] != 'tiger') {
        console.log(i + " >>> " + flintstones[i]);
    }

    i++;
    //i += 1; // i = i + 1;
}