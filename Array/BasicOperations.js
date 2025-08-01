let weapons = ["🗡️", "🛡️", "🏹"];

//Printing
console.log(weapons);

//Add to start
weapons.unshift("🔥");
console.log(weapons);

//Add to end
weapons.push("⚔️");
console.log(weapons);

//Removing second element
weapons.splice(1,1)
console.log(weapons);

//Calculating length
let count = 0;
for(let i = 0;weapons[i] !== undefined; i++){
  count++;
}
console.log("Length of array is: "+count);

//Writing function to find length
function findLength(arr){
    let count = 0;
    for (let i = 0; arr[i] !== undefined; i++) {
      count++;
    }
    return count;
}

console.log("Length of array is: " + findLength(weapons));

//Find Index of an element
function findIndex(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target) return i
    }
    return -1;
}
