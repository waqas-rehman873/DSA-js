// window.last = "waq";
// last = "was";
const user = {
    first: "Mubasher",
    last: "ali",
    getFirstName: function () {
        console.log(this);
        console.log("FIRST NAME: ", this.first);
        getLastName2 = () => {
            console.log(this);
            console.log("LAST NAME: ", this.last);
        };
        getLastName2();
        // getLastName();
    },
    getLastName: () => {
        console.log(this);
        console.log("LAST NAME: ", this.last);
    },
};
user.getLastName();
user.getFirstName();
// user.getLastName();
// const boundGetLastName = user.getLastName.bind(user);
// boundGetLastName();
// console.log(boundGetLastName);
// in normal function the if we call like obj.func() then this will refer to obj this===obj true
// other this refer to  the global or window
//
const obj = {
    name: "waqas",
    age: "12",
    gender: "male",
    fun1: function () {
        console.log("func1");
        console.log(this.age);
        console.log("this is", this);
    },
    fun2: () => {
        console.log("func2");
        console.log(this.age);
        console.log("this in arrow fun", this);
    },
    fun3() {
        console.log("func3");
        console.log(this.gender);
        console.log("this in simple fun object key", this);
        this.fun2();
    },
};
console.log(obj.fun1());
console.log(obj.fun2());
console.log(obj.fun3());

var person = {
    name: "jason",

    shout: function () {
        console.log("my name is ", this.name);
    },
    shout2: () => {
        console.log("my name is ", this.name);
    },
};
person.shout();
person.shout2();

person.shout2();
const obj2 = {
    fname: "waqas",
    lname: "rehman",
};
function funcName() {
    console.log(this.fname);
    console.log(this.lname);
}
const result = funcName.bind(obj2);
console.log(result());
console.log(result);
funcName.call(obj2);
funcName.apply(obj2);
