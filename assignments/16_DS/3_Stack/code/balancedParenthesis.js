"use strict";

const Stack = require("./stack");

function isBalanced(exp) {
  let myStack = new Stack(10);

  //Iterate through the string exp
  for (let i = 0; i < exp.length; i++) {
    //for every closing parenthesis check for opening parenthesis
    if (exp[i] == "}" || exp[i] == "]" || exp[i] == ")") {
      if (exp.length == 0) {
        return false;
      }

      let output = myStack.pop();
      //If you can't find the opening parentheses for any closing one then returns false.
      if (
        (exp[i] == "}" && output != "{") ||
        (exp[i] == ")" && output != "(") ||
        (exp[i] == "]" && output != "[")
      ) {
        return false;
      }
    } else {
      //For each opening parentheses, push it into stack
      myStack.push(exp[i]);
    }
  }
  //after complete traversal of string exp, if there's any opening parentheses left
  //in stack then also return false.
  if (myStack.isEmpty() == false) {
    return false;
  }
  //At the end return true if you haven't encountered any of the above false conditions.
  return true;
}

let inputString = "{[()]}";
console.log(inputString);
console.log(isBalanced(inputString)); //true

inputString = "{[([({))]}}";
console.log(inputString);
console.log(isBalanced(inputString)); //false

inputString = "[";
console.log(inputString);
console.log(isBalanced(inputString)); //false
