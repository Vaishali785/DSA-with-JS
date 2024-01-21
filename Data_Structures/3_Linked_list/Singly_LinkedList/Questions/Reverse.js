/**
 * reverse linked list
 */
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        },
            this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        // console.log(this.head)
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode != null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    insert(index, value) { //2,99
        if (index == 0) {
            this.prepend(value);
            // console.log(this);
            return;
        }
        if (index >= this.length) {
            this.append(value);
            // console.log(this);
            return;
        }
        let newNode = {
            value: value,
            next: null
        }
        let prevNode = this.traverseToIndex(index - 1);
        let requiredNode = prevNode.next;

        prevNode.next = newNode;
        newNode.next = requiredNode;
        this.length++;
        // console.log(this);

    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter != index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        let prevBeforeRemovedNode = this.traverseToIndex(index - 1);
        let nextAfterRemovedNode = this.traverseToIndex(index + 1);

        prevBeforeRemovedNode.next = nextAfterRemovedNode;
        this.length--;
        this.printList();
    }
    reverse() {
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        console.log(this);
    }
}


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
myLinkedList.reverse();
myLinkedList.printList();
