
//declare a variable

var name;
var age;
var hungry;

name = 'fred'; //string, 

age = 50.5; //number

hungry = false; //boolean - not, and, or
tired = false; //boolean - not, and, or

var timeToLeave = hungry || tired;

if (age > 50) {
    console.log(">>>> yes");
} else {
    console.log(">>>> no");
}

console.log('hungry && tired: ' + (hungry && tired));
console.log('hungry || tired: ' + timeToLeave);
console.log('!hungry && !tired: ' + (!hungry && !tired));

//alert('hello ' + name);

// str + str -> concatenation

