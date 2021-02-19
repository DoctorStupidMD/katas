function insertSort(inputArrary) {
  var n = inputArray.length;
  for (var i = 1; i < n; i++) {
    var current = inputArray[i];
    var j = i - 1;
    while ((j > -1) && (current < inputArray[j])) {
      inputArray[j + 1] = inputArray[j];
      j--;
    }
    inputArray[j + 1] = current;
  }
  return inputArray;
}
