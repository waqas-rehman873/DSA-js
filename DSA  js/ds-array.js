// arrays
const arr = [2, 1, 3, 4, "23333"];
console.log(arr);
arr.push(5);
console.log(arr);
arr.pop(5);
console.log(arr);
arr.shift(arr[2]);
console.log(arr);
arr.unshift(3);
//
console.log(arr);
//concat filter map reduce
// push pop are O(1)
// shift unshifted are O(n)
// concate O(n)
// map reduce filter forEach O(n)
// in some cases it might me contain for loop this case it might be quadratic
