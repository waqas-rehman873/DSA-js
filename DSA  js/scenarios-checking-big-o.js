// whether a number is power of 2^x
function power(n) {
    if (n < 1) {
        return false;
    }

    for (let i = 0; n > 1; n = n / 2) {
        if (n % 2 !== 0) {
            return false;
        }
        return true;
    }
}
console.log(power(4));
console.log(power(5));
// true false
// O(logn) because we reducing the value of input size

function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0;
}
console.log(isPowerOfTwoBitWise(7));
console.log(isPowerOfTwoBitWise(8));
//
// O(1)
