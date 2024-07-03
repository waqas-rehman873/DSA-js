// stack implementation is last-In first-out
//  back tracking history browser
// undo operations
// push pop LiFo
// queue ---> FiFo
// cpu task sheduling
// callstack in js runtime
//methods
// enqueue(); add Element in the queue
// dequeue() remove the oldest element in the queue
// peek() get the valueof element  at the front of  the queue without removing it
// isEmpty() check if the queue is empty
// size() get the number of element in the queue
// print() visualize the number of element in the queue
class queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        this.items.length === 0;
    }
    peek() {
        if (!isEmpty) {
            return this.items[0];
        }
        return null;
    }
    print() {
        console.log(this.items.toString());
    }
    size() {
        return this.items.length;
    }
}
const instance = new queue();
instance.isEmpty();
console.log(instance);
instance.enqueue(2);
instance.enqueue(3);
instance.enqueue(5);
instance.enqueue(12);
instance.enqueue(2);
console.log(instance);
instance.print();
console.log(instance.size());
//optimised
class optQueue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rare = 0;
    }
    enq(e) {
        this.items[this.rare] = e;
        this.rare++;
    }
    deq() {
        const item = this.items[this.front];
        delete this.items[this.front];
        return item;
    }
    isEmp() {
        return this.rare - this.front === 0;
    }
    sizeLeft() {
        this.rare - this.front;
    }
    peek() {
        return this.items[this.front];
    }
}

const instanceQueue = new optQueue();
console.log(instanceQueue.isEmp());
instanceQueue.enq(12);
instanceQueue.enq(7);
instanceQueue.enq(1);
console.log(instanceQueue);
instanceQueue.deq();
console.log(instanceQueue);
