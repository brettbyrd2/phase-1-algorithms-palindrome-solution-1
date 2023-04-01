function reverse(word) {
  // 'abc' => 'cba'
const wordArray = word.split("")
const reversedWordArray = wordArray.reverse()
const reversedWord = reversedWordArray.join("")
return reversedWord
}


function isPalindrome(word) {
 const reversedWord = reverse(word)

  return word === reversedWord 
  }

/* 
  Add your pseudocode here
  if the word is the same in reverse return true
 
  reverse the input string

  if the input is the same as the reversed input
  return true
  else
  return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
