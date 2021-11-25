//'almas', 5, true, {}, []
//'', 0, false, null, undefined
//check truthy
let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;

//check negative or falsy anything
if (!myMoney) {
    myMoney = 0
}
else {
    myMoney *= 100;
}

const money = 190;
let food;
if (money > 100) {
    food = 'biriyani';
}
else {
    food = 'cha biscuit';
}

//ternary
let food1 = money > 100 ? 'biriyani' : 'cha biscuit';
console.log(food1);

//number to string conversion shortcut
const num1 = 52;
const numStr = num1 + '';
console.log(numStr);

//string to number shortcut
const input = '560';
const inputNum = +input;
console.log(inputNum);

//
let isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

isActive ? showUser() : hideUser();

//use && if the left side is true then right side will be executed
isActive && showUser();

//use || if the left side is false then the right side will be executed 
isActive || showUser();

//toggle boolean
isActive = !isActive;