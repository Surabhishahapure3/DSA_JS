/*There are two types of circular linkedlist :
1. Circular singly linkedlist
2. Circular doubly linkedlist
1. Circular singly linkedlist in similar to singly linkedlist except last node points to the first node
2. In circular doubly linkedlist in similar to the doubly linkedlist except last node of circular doubly linkedlist poinrts to first node and 
 first node of doubly circular linkedlist points to last node*/

 class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularSinglyLinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(val) {
        let newNode = new Node(val);
        if (!this.head) {
            newNode.next = newNode;
            this.head = newNode;
        } 
        else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            newNode.next = this.head;
            temp.next = newNode;
            this.head = newNode;
        }
    }

    addLast(val) {
        let newNode = new Node(val);
        if (!this.head) {
            newNode.next = newNode;
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.next = this.head;
        }
    }

    addAtIndex(index, val) {
        if (index === 0) {
            this.addFirst(val);
            return;
        }

        let newNode = new Node(val);
        let temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            if (temp.next === this.head) {
                throw new Error("Index out of bounds");
            }
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;
    }

    removeFirst() {
        if (!this.head) {
            throw new Error("List is empty");
        }

        if (this.head.next === this.head) {
            this.head = null;
        } else {
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            temp.next = this.head.next;
            this.head = this.head.next;
        }
    }

    removeLast() {
        if (!this.head) {
            throw new Error("List is empty");
        }

        if (this.head.next === this.head) {
            this.head = null;
        } else {
            let temp = this.head;
            while (temp.next.next !== this.head) {
                temp = temp.next;
            }
            temp.next = this.head;
        }
    }

    removeValue(val) {
        if (!this.head) {
            throw new Error("List is empty");
        }

        if (this.head.data === val) {
            this.removeFirst();
            return;
        }

        let temp = this.head;
        while (temp.next !== this.head && temp.next.data !== val) {
            temp = temp.next;
        }

        if (temp.next.data === val) {
            temp.next = temp.next.next;
        } else {
            throw new Error("Value not found in the list");
        }
    }

    printList() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let temp = this.head;
        let result = [];
        do {
            result.push(temp.data);
            temp = temp.next;
        } while (temp !== this.head);
        console.log(result.join(" -> "));
    }
}

let list = new CircularSinglyLinkedList();
list.addFirst(10);
list.addFirst(20);
/*
list.addLast(30);
list.addAtIndex(1, 15);
*/
list.printList(); // Expected output: 20 -> 15 -> 10 -> 30

// list.removeFirst();
list.printList(); // Expected output: 15 -> 10 -> 30

// list.removeLast();
list.printList(); // Expected output: 15 -> 10

// list.removeValue(10);
list.printList(); // Expected output: 15