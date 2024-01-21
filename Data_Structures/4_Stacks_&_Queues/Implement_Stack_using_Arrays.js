class Stack {
    constructor() {
        this.data = new Array();
    }
    peek() {
        console.log(this.data[this.data.length - 1]);
    }

    push(value) {
        this.data.push(value);
        // this.length++;
    }
    pop() {
        this.data.pop();
        // this.length--;
    }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.push("Twitter");
console.log(myStack);
myStack.peek();
myStack.pop();
console.log(myStack);