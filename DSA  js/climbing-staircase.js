function climbingStaircase(n) {
    noOfWays = [1, 2];
    for (let index = 2; index <= n; index++) {
        noOfWays[index] = noOfWays[index - 1] + noOfWays[index - 2];
    }
    return noOfWays[n - 1];
}
console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(4));

console.log(climbingStaircase(5));
//step can take is 1 or 2 counts ways of n
//if n is 3 .3..it will 1,1,1 2,1 1,2
//4 5...2,2 1,2,1 2,1,1 1,1,1,1 1,1,2
//5 1,1,1,1,1/2111 /1211 /1121 /1112 221 122 212
//O(n)
