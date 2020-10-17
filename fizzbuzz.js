// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” 
// instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples 
// of both three and five print “FizzBuzz”.

// i = 1 because the sequence starts at 1 (digits, not indicies). 
// Attempt #1:
function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Attempt #2: remove multiple console.log() statements.
function fizzBuzz2() {
  for (var i = 1; i <= 100; i++) {
    var result = '';
    
    if (i % 3 === 0 && i % 5 === 0) {
      result += 'FizzBuzz';
    } else if (i % 3 === 0) {
      result += 'Fizz';
    } else if (i % 5 === 0) {
      result += 'Buzz';
    } else {
      result = i;
    }
    
    console.log(result);
  }
}

// Attempt #3: Tweaked #2.
function fizzBuzz3() {
  for (var i = 1; i <= 100; i++) {
    var result = '';

    if (i % 3 === 0) {
      result += 'Fizz';
    } 
    if (i % 5 === 0) {
      result += 'Buzz';
    }

   console.log(result ? result : i);
  }
}