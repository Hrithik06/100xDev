/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // if(str1.length == str2.length){
    let arr1 = str1.toLowerCase().split('')
    let arr2 = str2.toLowerCase().split('')
    let s1 = arr1.sort().join('')
    let s2= arr2.sort().join('')


    return (s1===s2)
    


}



module.exports = isAnagram;
