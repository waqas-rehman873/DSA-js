const seta = new Set([1, 2, 12, 2]);
console.log(seta);
seta.add(4);
console.log(seta);
seta.has(12);
console.log(seta);
//sets insertion order cant maintain
//sets cnt duplicate values
seta.delete(2);
console.log(seta);
seta.clear();
//objects are unordered not iterables
//maps are iterables,, and ordered
// apart from storing data functionality to an object functionality can attach but in
// maps are restricted
const mapA = new Map([
    ["a", 2],
    ["b", 3],
]);
console.log(mapA);
console.log(mapA.has("a"));
console.log(mapA.size);
