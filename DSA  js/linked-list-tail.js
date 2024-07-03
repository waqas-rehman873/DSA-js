// linked list is dynamic ds need it because we cannot increase size on runtime  linked list will do it
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// export default class LinkedList {
//     constructor() {
//         this.size = 0;
//         this.head = null;
//         this.tail = null;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     prepend(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }
//     append(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             this.tail.next = node;
//             this.tail = node;
//         }
//         this.size++;
//     }
//     removeFromFront() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         const value = this.head.value;
//         this.head = this.head.next;
//         this.size--;
//         return value;
//     }
//     removeFromTail() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         if (this.size === 1) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             let prev = this.head;
//             while (prev.next !== this.tail) {
//                 prev = prev.next;
//             }
//             prev.next = null;
//             this.size--;
//         }
//     }
//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return;
//         }
//         if (index === 0) {
//             this.prepend(value);
//         } else {
//             const node = new Node(value);
//             let prev = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next;
//             }
//             node.next = prev.next;
//             prev.next = node;
//             this.size++;
//         }
//     }
//     print() {
//         if (this.isEmpty()) {
//             console.log("list is empty");
//         } else {
//             let cur = this.head;
//             let listValue = "";
//             while (cur) {
//                 listValue += `${cur.value} `;
//                 cur = cur.next;
//             }
//             console.log(listValue);
//         }
//     }
//     removeNode(value) {
//         if (this.isEmpty()) {
//             return null;
//         }
//         if (this.head.value === value) {
//             const removedNode = this.head;
//             this.head = this.head.next;
//             this.size--;
//             return removedNode.value;
//         }
//         let prev = this.head;
//         let current = this.head.next;
//         while (current) {
//             if (current.value === value) {
//                 prev.next = current.next;
//                 this.size--;
//                 return current.value;
//             }
//             prev = current;
//             current = current.next;
//         }

//         return null;
//     }
//     removeValue(value) {
//         if (this.isEmpty()) {
//             return null;
//         }
//         if (this.head.value === value) {
//             this.head = this.head.next;
//             this.size--;
//             return value;
//         }
//         let prev = this.head;
//         let current = this.head.next;
//         while (current) {
//             if (current.value === value) {
//                 prev.next = current.next;
//                 this.size--;
//                 return value;
//             }
//             prev = current;
//             current = current.next;
//         }
//         return null;
//     }
//     //prev,next is equal to prev . next .value is not equal to value
//     searchValue(value) {
//         if (this.isEmpty()) {
//             return -1;
//         }
//         let i = 0;
//         let curr = this.head;
//         while (curr) {
//             if (curr.value === value) {
//                 return i;
//             }
//             curr = curr.next;
//             i++;
//         }
//         return -1;
//     }
//     reverse() {
//         let prev = null;
//         let curr = this.head;
//         while (curr) {
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }
//         this.head = prev;
//     } //O(n)
// }
// module.exports = LinkedList;
// const list = new LinkedList();
// console.log("Is the list empty?", list.isEmpty());
// console.log("Size of the list:", list.getSize());
// list.print();
// // list.insert(2, 0);
// // list.print();
// // list.insert(12, 0);
// // list.print();
// // list.insert(22, 1);
// list.print();
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.prepend(0);
// list.print();
// // list.prepend(12);
// // list.print();
// list.removeFromTail();
// list.print();
// console.log(list.getSize());
// list.removeFromFront();
// list.print();
// 13.14.15.16.
// window.last = "waq";
// last = "was";
const user = {
    first: "Mubasher",
    last: "ali",
    getFirstName: function () {
        console.log("FIRST NAME: ", this.first);

        const getLastName2 = () => {
            console.log(this);
            console.log("LAST NAME: ", this.last);
        };
        getLastName2();
    },
    getLastName: () => {
        console.log(this);
        console.log("LAST NAME: ", this.last);
    },
};
user.getFirstName();
user.getLastName();
const boundGetLastName = user.getLastName.bind(user);
boundGetLastName();
console.log(boundGetLastName);
// in normal function the if we call like obj.func() then this will refer to obj this===obj true
//other this refer to  the global or window

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
// window.name = "glo";

var person = {
    name: "jason",

    shout: function () {
        console.log("my name is ", this.name);
    },
    shout2: () => {
        console.log("my name is ", this.name);
    },
    shout3() {
        console.log("my name is ", this.name);
    },
};
person.shout(); // "jason"
person.shout2();
person.shout3(); //
person.shout2();
