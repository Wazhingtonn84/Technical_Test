// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.
// eg " Hello World " => returns 2

function countVowels(mySentence) {
  const vowels = ["a", "e", "i", "o", "u"]; //Defining the vowels
  mySentence = mySentence.toLowerCase(); //Change the sentence to lowercase for easy match with the constant vowels

  let vowCount = 0; //Initialize the vowels count

  for (let i = 0; i <= mySentence.length; i++) {
    if (vowels.includes(mySentence[i])) {
      vowCount++;
    }
  }
  return vowCount;
}
let input = prompt("Enter your sentence: ");
let result = countVowels(input);
console.log("Number of vowels: ", result);
