// circular Queue
// traffic lights ,streaming data, traffic lights,
// 1--enqueue ()
// 2--dequeue()
// 3--size()
// 4--peek()
// 5--isFull()
// 6--isEmpty()
// 7--print()
class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.front = 0;
        this.rear = -1;
        this.currentLength = 0;
    }
    isFull() {
        return this.currentLength === this.capacity;
    }
    size() {
        return this.currentLength;
    }
    isEmpty() {
        return this.currentLength === 0;
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            let i = this.front;
            let str = "";
            do {
                str += this.items[i] + " ";
                i = (i + 1) % this.capacity;
            } while (i !== (this.rear + 1) % this.capacity);

            console.log(str.trim());
        }
    }

    enqueue(e) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = e;
            this.currentLength += 1;
            if (this.front === -1) {
                this.front = 0;
            }
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            const item = this.items[this.front];
            this.items[this.front] = null;
            this.front = (this.front + 1) % this.capacity;
            this.currentLength -= 1;
            if (this.isEmpty()) {
                this.front = -1;
                this.rear = -1;
            }
            return item;
        }
        return null;
    }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());
queue.enqueue(2);
queue.enqueue(23);
queue.enqueue(26);
queue.enqueue(36);
queue.enqueue(36);
console.log(queue.isFull());
queue.print();
console.log(queue.dequeue());
