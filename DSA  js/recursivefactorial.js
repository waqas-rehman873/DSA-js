function recursiveFactorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * recursiveFactorial(n - 1);
}
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(3));

// n!=n*(n-1)!
// O(n)
//
