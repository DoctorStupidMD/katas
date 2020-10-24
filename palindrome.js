// Write a function that determines whether a given string is a palindrome. Your function should accept a string 
// as a parameter and return a boolean (true if the string is a palindrome, false if it is not).

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. 
// Allowances may be made for adjustments to capital letters, punctuation, and word dividers. 
// Examples in English include “A man, a plan, a canal, Panama!”, “Amor, Roma”, “race car”, “stack cats”, 
// “step on no pets”, “taco cat”, “put it up”, “Was it a car or a cat I saw?” and “No ‘x’ in Nixon”.

// Thoughts:
  // Need to remove all characters that aren't alphanumeric. Regex replace() helper function?
  // Need to turn everything lowercase.
  // Instead of comparing the first and last characters then moving inward (attempt #2), just flip the entire string and
    // compare against the original string (attempt #1).


// Attempt #1: Using built-in functions.  
function palindrome1(originalString) {
  // \W is the same as [^A-Za-z0-9_]: NOT these ranges.
  var regExp = /[\W_]/g;
  var testString = originalString.toLowerCase().replace(regExp, '');
  var mirrorString = testString.split('').reverse().join('');

  return mirrorString === testString;
}


// Attempt #2: Using a for loop.
function palindrome2(originalString) {
  var regExp = /[\W_]/g;
  var testString = originalString.toLowerCase().replace(regExp, '');

  // When the loop finds two indices that don't match, return false.
  for (var i = 0; i < testString.length / 2; i++) {
    if (testString[i] !== testString[testString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
