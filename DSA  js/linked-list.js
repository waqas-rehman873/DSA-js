// linked list is dynamic ds need it because we cannot increase size on runtime  linked list will do it
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let cur = this.head;
            let listValue = "";
            while (cur) {
                listValue += `${cur.value} `;
                cur = cur.next;
            }
            console.log(listValue);
        }
    }

    removeNode(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === value) {
            const removedNode = this.head;
            this.head = this.head.next;
            this.size--;
            return removedNode.value;
        }
        let prev = this.head;
        let current = this.head.next;
        while (current) {
            if (current.value === value) {
                prev.next = current.next;
                this.size--;
                return current.value;
            }
            prev = current;
            current = current.next;
        }

        return null;
    }
    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while ((prev.next === prev.next.value) !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                const removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value;
            }
        }

        return null;
    } //prev,next is equal to prev . next .value is not equal to value
    searchValue(value) {
        if (this.isEmpty()) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }
    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    } //O(n)
}

const list = new LinkedList();
console.log("Is the list empty?", list.isEmpty());
console.log("Size of the list:", list.getSize());
list.print();
list.insert(2, 0);
list.print();
list.insert(12, 0);
list.print();
list.insert(22, 1);
list.print();
list.insert(3, 2);
list.print();
list.insert(45, 3);
list.insert(4, 4);
list.print();
console.log("index of search value", list.searchValue(22));
console.log("index of search value", list.searchValue(44));
// console.log("Removed node ", list.removeNode(12));
list.print();
console.log("Removed with value:", list.removeValue(12));
list.print();
list.reverse();
list.print();
