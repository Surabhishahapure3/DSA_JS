class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

 
    Node(data) {
        return {
            data: data,
            prev: null,
            next: null
        };
    }

    
    addFirst(data) {
        const newNode = this.Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

   
    addLast(data) {
        const newNode = this.Node(data);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    
    addAtIndex(index, data) {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) {
            this.addFirst(data);
            return;
        }

        if (index === this.size) {
            this.addLast(data);
            return;
        }

        const newNode = this.Node(data);
        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        newNode.prev = current;
        current.next.prev = newNode;
        current.next = newNode;

        this.size++;
    }

    removeTop() {
        if (this.head === null) {
            throw new Error("List is empty");
        }

        const data = this.head.data;
        this.head = this.head.next;

        if (this.head !== null) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }

        this.size--;
        return data;
    }

    removeLast() {
        if (this.tail === null) {
            throw new Error("List is empty");
        }

        const data = this.tail.data;
        this.tail = this.tail.prev;

        if (this.tail !== null) {
            this.tail.next = null;
        } else {
            this.head = null;
        }

        this.size--;
        return data;
    }

    removeAtIndex(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) {
            return this.removeTop();
        }

        if (index === this.size - 1) {
            return this.removeLast();
        }

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;

        this.size--;
        return current.data;
    }


    printList() {
        let current = this.head;
        while (current !== null) {
            process.stdout.write(current.data + " ");
            current = current.next;
        }
        console.log();
    }
}


const dll = new DoublyLinkedList();
dll.addFirst(10);
dll.addLast(20);
dll.addAtIndex(1, 15);
dll.addAtIndex(0, 5);
dll.addAtIndex(4, 25);
dll.removeTop();
dll.removeLast();
dll.removeAtIndex(1)
dll.printList(); 
