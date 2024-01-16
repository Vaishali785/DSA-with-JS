class myArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        delete this.data[index];
        this.shiftItems(index);
    }
    shiftItems(index) {
        for (var i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArr = new myArray();
newArr.push("Hey");
newArr.push("It's");
newArr.push("me");
console.log(newArr);
newArr.delete(0);
console.log(newArr);
newArr.delete(0);
console.log(newArr);