//Merging and sorting two arrays
let one = [1, 3, 5];
let two = [2, 4, 6];

function mergeAndSort(arr1, arr2) {
  let SortedArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      SortedArray.push(arr1[i]);
      i++;
    } else {
      SortedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    SortedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    SortedArray.push(arr2[j]);
    j++;
  }
  return SortedArray;
}

console.log("Sorted Array: " + "[" + mergeAndSort(one, two) + "]");
