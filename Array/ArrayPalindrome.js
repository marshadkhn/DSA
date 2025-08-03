let numbers = [1, 2, 3, 2, 1];

function isPalindrome(arr) {
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        if(arr[start] !== arr[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

if(isPalindrome(numbers) === true){ console.log("Array is a palindrome")}
else { console.log("Array is not a palindrome")}