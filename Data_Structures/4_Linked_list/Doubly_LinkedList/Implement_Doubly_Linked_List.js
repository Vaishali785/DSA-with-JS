/**
 * 1.)  append()
 *       10----> 5 -----> 16
 * 
 * 2.)  prepend()
 *       1 ------> 10 ------> 5 -----> 16 
 * 
 * 3.) insert()
 *       1 ------> 10 ------> 99--------> 5 -----> 16 
 * 
 * 4.) remove()
 *       1 ------> 10 ------> 5 -----> 16 
 */
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        },
            this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        console.log(this)
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        console.log(this);
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
            console.log(this);
            return;
        }
        if (index >= this.length) {
            this.append(value);
            console.log(this);
            return;
        }
        let newNode = {
            value: value,
            next: null,
            prev: null
        }
        let prevNode = this.traverseToIndex(index - 1);
        let follower = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        console.log(this);

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
        nextAfterRemovedNode.prev = prevBeforeRemovedNode;
        this.length--;
        this.printList();
        console.log(this.head.next);
        console.log(this.head.next.next);
        // console.log(nextAfterRemovedNode);
    }
}


const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
myLinkedList.printList();