import LinkedList from "./linked-list-tail";
class linkedListQueue {
    constructor() {
        this.list = new LinkedList();
    }
    enqueue(value) {
        this.append(value);
    }
    dequeue() {
        return this.list.removeFromFront();
    }
    peek() {
        return this.list.head.value;
    }
    print() {
        return this.list.print();
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    getSize() {
        this.list.getSize();
    }
}
const queue = new linkedListQueue();
console.log(queue.isEmpty());
queue.enqueue(12);
queue.enqueue(121);
queue.enqueue(11);
queue.print();
