function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let index = 0; index < arr.length - 1; index++) {
            if (arr[index] > arr[index + 1]) {
                const temp = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
const arr = [2, 3, 4, 5, 1];
bubbleSort(arr);
console.log(arr);
//dont use
