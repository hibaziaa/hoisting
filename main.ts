//HOISTING WITH VAR, LET & CONST.
//using VAR.
//following two lines will run successfully due to JS hoisting.
console.log(userName); //will print undefined

var userName: string = "Hiba"; //declaration hoisted to the top but the initialization isn't.

console.log(userName);

//using LET or CONST
console.log(password); //reference error, in this case initialization is necessary first, hoisting doesn't work.

let //const
  password: number = 1234;

console.log(password);
