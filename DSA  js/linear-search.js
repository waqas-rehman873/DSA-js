// find element index if not then return -1 if not present
function linearSearch(arr, n) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === n) {
            return index;
        }
    }
    return -1;
}

console.log(linearSearch([2, 12, 16, 4, 5, -1], 2));
console.log(linearSearch([2, 12, 16, 4, 5, -1], 16));
console.log(linearSearch([0, 20, 16, 40, 5, -1], 20));
//O(n)
