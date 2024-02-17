// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the
// string, and then returns the result string.
// Examples:
// "hi"=> returns "Hi"
// "i love programming"=> returns "I Love Programming"

const word = prompt("Enter any word in lowercase: ");
function capitalizeWord(word) {
  let mySentence = word.toLowerCase().split(" ");
  for (let i = 0; i < mySentence.length; i++) {
    mySentence[i] =
      mySentence[i].charAt(0).toUpperCase() + mySentence[i].substring(1);
  }
  return mySentence.join(" "); //spacing between the words
}
console.log(capitalizeWord(word));
