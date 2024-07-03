// two finite non empty sets
function cartesianProduct(arrA, arrB) {
    // const loopLength = arrA.length * arrB.length;
    const result = [];
    for (let index = 0; index < arrA.length; index++) {
        for (let i = 0; i < arrB.length; i++) {
            result.push([arrA[index], arrB[i]]);
        }
    }
    return result;
}
const arrA = [1, 4]; //[[1,3],[1,5],[4,3],[4,5]]
const arrB = [3, 5, 2];

console.log(cartesianProduct(arrA, arrB));
//[[1,3],[1,5],[4,3],[4,5]]
// timecomplexity
// O(mn); depending on both array length
