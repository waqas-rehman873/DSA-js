//binary search apply in sorted
function binarySearch(arr, n) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[middleIndex] === n) {
            return middleIndex;
        }
        if (n < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}
console.log(binarySearch([12, 8, 4, 2], 8));
console.log(binarySearch([2, 4, 6, 8, 10], 6));
console.log(binarySearch([2, 12, 34, 45, 50], 34));
//O(logn)
