let numbers = [1, 2, 3, 4, 5];

function reverseArray(arr){
    let tempArr = [...arr];
    let reverse = [];
    while(tempArr.length > 0){
        reverse.push(tempArr.pop())
    }
    return reverse;
}

console.log("Original Array: " + numbers);
console.log("Reversed Array" + reverseArray(numbers));

