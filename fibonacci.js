// Fibonnaci: Write a function fib() that takes an integer n and returns the nth Fibonacci number. 
// For consistency, everybody should make their fibonacci sequence 1-based (the first example).

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144


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


// Case #2: Recursive. 
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
function fib2(n) {
  if (n <= 0) {
    console.log('Please enter an integer greater than 0.');
  } else {
    for (var i = 0; i < n; i++) {
      console.log(recursiveFunc(i));
    }
  }
}

