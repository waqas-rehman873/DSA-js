function recursiveBinarySearch(arr, target) {
    return binarySearch(arr, target, 0, arr.length - 1);
}
function binarySearch(arr, target, firstIndex, rightIndex) {
    if (firstIndex > rightIndex) {
        return -1;
    }
    let middleIndex = Math.floor((firstIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
        return middleIndex;
    }
    if (target < arr[middleIndex]) {
        return binarySearch(arr, target, firstIndex, middleIndex - 1);
    } else {
        return binarySearch(arr, target, middleIndex + 1, rightIndex);
    }
}
console.log(recursiveBinarySearch([1, 2, 3], 2));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 7], 9));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 7], 7));
//O(logn)
