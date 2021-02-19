// #1: In JavaScript, write a recursive function, getJthTerm, that takes one argument, j, and returns the jth element in this sequence.

function getJthElement(i) {
  if (j === 1) {
    return 1;
  } else {
    return getJthElement(j - 1) + 3;
  }
}

// #2: In JavaScript, write a recursive function, getKthTerm, that takes one argument, k, and returns the kth element in this sequence.

function getKthTerm(k) {
  if (k === 1) {
    return 1;
  } else if (k === 2) {
    return 3;
  } else {
    return getKthTerm(k - 2) + (2 * getKthTerm(k - 1));
  }
}

// #3: In JavaScript, write a recursive function, fibonacci, that takes one argument, i, and returns the ith element in the fibonacci sequence.

function fib(n) {
  if (n < 2) {
    return n;  
  } 
  return fib(n - 2) + fib(n - 1);
}
