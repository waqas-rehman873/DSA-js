function quick(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr.length - 1;
    let left = [];
    let right = [];
    for (let index = 0; index < arr.length - 1; index++) {
        if (pivot < arr[index]) {
            left.push(arr[index]);
        } else {
            right.push(arr[index]);
        }
    }
    return [...quick(left), pivot, ...quick(right)];
}
const ar = [2, 4, 1, 7, 5];
quick(ar);
console.log(ar);
//worst case is o(n^2)
//avg O(nlogn)
//o(n) is repetation  logn is dividing into smaller arrays
// selecting pivot element then
