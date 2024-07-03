function insertionSort(arr) {
    for (let index = 1; index < arr.length; index++) {
        let numberToInsert = arr[index];
        let j = index - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberToInsert;
    }
}
let arr = [3, 2, 4, 8, 1];
insertionSort(arr);
console.log(arr);
//O(n^2)
