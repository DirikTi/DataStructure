class Queue {

    constructor() {
        this.items = [];

    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return -1;
        }

        return this.items.shift();
    }

    isEmpty() {
        // return true if the queue is empty. 
        return this.items.length == 0;
    }

    front() {
        if (this.isEmpty())
            return -1;
        return this.items[0];
    }

    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}