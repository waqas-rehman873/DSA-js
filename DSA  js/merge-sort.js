function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
    let sortedArr = [];
    if (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}
const ar = [2, 4, 1, 6];
mergeSort(ar);
console.log(ar);
//dividing the array into array atleast the all element are single
//then making them to merge
// O(nlogn);
// and this technique is fast
