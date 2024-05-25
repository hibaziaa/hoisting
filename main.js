//HOISTING WITH VAR, LET & CONST.
//using VAR.
//following two lines will run successfully due to JS hoisting.
console.log(userName);
var userName = "Hiba"; //declaration hoisted to the top but the initialization isn't.
console.log(userName);
//using LET or CONST
console.log(password);
var password = 1234;
console.log(password);
