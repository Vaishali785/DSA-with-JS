class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0
    }
    peek() {
        console.log(this.top);
    }
    push(value) {
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.top;
        this.top = newNode;

        if (this.length == 0) {
            this.bottom = this.top;
        }
        this.length++;
        // console.log(this);
    }
    pop() {
        if (this.length > 0) {
            if (this.length == 1) {
                this.top = null;
                this.bottom = null;
                this.length = 0;
                console.log(this);
                return;
            }
            // const firstItem = this.top;
            this.top = this.top.next;
            this.length--;
            console.log(this);
        } else {
            console.log("empty stack found")
        }
    }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
console.log(myStack);
// myStack.peek();
myStack.pop();
myStack.pop();
// myStack.pop();
