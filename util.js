class Queue {
    constructor() {
        this.elements = [];
        this.count = 0;
    }
    /**
     * @description adding elements to queue
     */
    enqueue = (newElements) => {
        this.elements.push(newElements);
        console.log(`For position ${this.count} enqueue: ${newElements} `);
        this.count++;
    }
    //to dequeue elements
    dequeue = () => {
        if (this.elements.length == 0) {
            console.log(`empty queue`);
        }
        else { }
        console.log(`Deleted item is ${this.elements[0]}`);
        this.elements.shift();//to shift all value//
    }
    //to print all value
    printQueue = () => {
        if (this.elements.length == 0) {
            console.log("empty queue");
        }
        else {
            console.log(`${this.elements} for position 1 to ${this.elements.length}`);
        }
    }


}

module.exports = new Queue();
