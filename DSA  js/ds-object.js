function obj(n) {
    return (n.name = "waqas");
}
let ob = {};
console.log(obj(ob));
let ob1 = {
    lastName: "rehman",
};
obj(ob1);
console.log(ob1);
delete ob1.lastName;
console.log(ob1);
// Object.keys(); --O(n)
// .values()  --O(n)
// .entries() --O(n)
// access remove insert --O(1)
// search O(n)
