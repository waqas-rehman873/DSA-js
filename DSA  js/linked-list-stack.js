// import LinkedList from "./linked-list-tail";
import LinkedList from "./linked-list-tail";
class linkedListStack {
    constructor() {
        this.list = new LinkedList();
    }

    push(value) {
        this.list.prepend(value);
    }

    pop() {
        return this.list.removeFromFront();
    }

    peek() {
        if (!this.isEmpty()) {
            return this.list.head.value;
        }
        return null;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        this.list.print();
    }
}

const stack = new linkedListStack();
stack.isEmpty();
stack.push(12);
stack.push(14);
stack.print();
stack.pop();
stack.print();
