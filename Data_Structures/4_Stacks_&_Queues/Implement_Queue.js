class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0
    }
    peek() {
        console.log(this.first);
    }
    enqueue(value) {
        const newNode = {
            value: value,
            next: null
        }
        if (this.length == 0) {
            this.first = newNode;
            this.last = newNode;
            this.length++;
            return;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
    }
    dequeue() {
        if (this.length == 0) {
            return;
        }
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
    }
}

const myQ = new Queue();
myQ.enqueue("1");
myQ.enqueue("2");
myQ.enqueue("3");
myQ.enqueue("4");
myQ.enqueue("5");
myQ.dequeue();
myQ.dequeue();
myQ.dequeue();
myQ.dequeue();
myQ.dequeue();
console.log(myQ);