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

}

module.exports = new Queue();