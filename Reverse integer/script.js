// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit
// ordering.
// Examples:
// For input 500, the program should return 5.
// For input -56, the program should return -65.
// For input -90, the program should return -9.
// For input 91, the program should return 19

function reverseInt(number) {
  const numString = number.toString();
  const reversedArr = numString.split("").reverse();
  const reversedNum = parseInt(reversedArr.join(""));

  return reversedNum;
}
const userInput = -5;
const reversedResult = reverseInt(userInput);
console.log(`Original number: ${userInput}`);
console.log(`Reversed number: ${reversedResult}`);
