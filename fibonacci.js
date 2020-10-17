// Fibonnaci: Write a function fib() that takes an integer n and returns the nth Fibonacci number. 
// For consistency, everybody should make their fibonacci sequence 1-based (the first example).

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144


// Initial thoughts:
  // (2 - 2) + (2 - 1) = 1
  // Index 0 value + index 1 value 

  // (3 - 2) + (3 - 1) = 3
  // Index 1 value + index 2 value

  // (4 - 2) + (4 - 1) = 5
  // Index 2 value + index 3 value 

  // (5 - 2) + (5 - 1) = 7
  // Index 3 value + index 4 value



// Case #1: Iterative.
  // To call the function, pass in the nth index. 
  // The function returns the integer corresponding to that index in the sequence. 
function fib1(n) {
  // Array begins with the digits we know will already exist.
  var array = [0, 1];

  for (var i = 2; i < n + 1; i++) {
    // Grabs these two indices and adds their values together; pushes to the array.
    array.push(array[i - 2] + array[i - 1]);
  }

  return array[n];
}



// Case #2: Recursive. One based.
function recursiveFunc(num) {
  // Base case.
  if (num < 2) {
    return num;
  } else {
  // Recursive case. 
    return recursiveFunc(num - 2) + recursiveFunc(num - 1);
  }
}

// Grab nth Fibonacci position from the user.
function fib2(nthIndex) {
  if (nthIndex <= 1) {
    console.log('Please enter an integer greater than 0.');
  } else {
    for (var i = 1; i < nthIndex; i++) {
      console.log(recursiveFunc(i));
    }
  }
}

