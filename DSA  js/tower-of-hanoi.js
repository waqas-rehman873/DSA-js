function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n > 0) {
        towerOfHanoi(n - 1, fromRod, toRod, usingRod);
        console.log(`move disk ${n} from ${fromRod} to ${usingRod}`);
        towerOfHanoi(n - 1, toRod, usingRod, fromRod);
    }
}
console.log(towerOfHanoi(3, "a", "b", "c"));

//permutation  and combination of list of numbers
function numbers() {}
console.log();
