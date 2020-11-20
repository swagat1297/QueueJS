let utility = require("./util.js");
let readlineSync = require('readline-sync');
//thking user input//
userChoice = function () {
    let isTerminated = true;
    while (isTerminated == true) {
        let choice = readlineSync.question("\nEner your choice:\n1.Enqueue\n2.Dequeue\n3.PrintQueue\n4.Exit\n");
        switch (choice.trim()) {
            case '1': let newValue = readlineSync.question("Enter value:");
                utility.enqueue(newValue);
                break;
            case '2': utility.dequeue();
                break;
            case '3': utility.printQueue();
                break;    
            case '4': isTerminated = false;
                break;
            default: console.log("Invalid input");
        }
    }
}
userChoice();
