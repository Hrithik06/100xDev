/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('')
  const strArr = str.split('').filter(item => item !== ' ')
  const revArr = reversedStr.split('').filter(item => item !== ' ')

  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g;
  const punctuation = strArr.filter(item => punctuationRegex.test(item));
  let finalStr = strArr.filter(item => !punctuation.includes(item)).join('')
  let finalStr2 = revArr.filter(item => !punctuation.includes(item)).join('')


  return (finalStr.toLowerCase() === finalStr2.toLowerCase())




}

module.exports = isPalindrome;
