/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let vowels = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 }
  let arr = str.toLowerCase().split('')

  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i]
    if (letter in vowels) {
      vowels[letter] += 1
    }
  }
  let total = 0;


  let values = Object.values(vowels)
  for (let i = 0; i < values.length; i++) {
    total += values[i]
  }
  const sum = values.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;},0)
    
    return(sum)
    

}


module.exports = countVowels;