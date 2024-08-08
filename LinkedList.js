class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    Insert(data) {
        const a = new Node(data);
        if (this.head === null) {
            this.head = a;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = a;
    }

    size() {
        let current = this.head;
        let count = 0;
        while (current) {
            count += 1;
            current = current.next;  // Advance the pointer
        }
        console.log(count);
    }

    Atindex(index, data) {
        if (index < 0 || index > this.size()) {
            console.log("Invalid index");
            return;
        }
        const newNode = new Node(data)
        if(index===0)
        {
            this.head = newNode
            return
        }
        else{
            let current = this.head
        for(let i=0;i<index-1;i++)
        {
            current = current.next
        }
            newNode.next = current.next
        current.next = newNode
        return
        }
    }

    removeTop()
    {
        if(this.head === null)
        {
            return
        }

        this.head  = this.head.next
    }

    removeLast()
    {
        let current = this.head
        while(current.next.next)
        {
            current = current.next
        }
        current.next = null
         
    }

    removeAtindex(index)
    {
        if (index < 0 || index > this.size()) {
            console.log("Invalid index");
            return;
        }
        
        if(index===0)
        {
            this.head = this.head.next
            return
        }
        else{
            let current = this.head
        for(let i=0;i<index-1;i++)
        {
            current = current.next
        }

        current = current.next.next

        return
        }
    }
        
        

    printTheList() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.data + " ";
            current = current.next;
        }
        console.log(output);
    }
}

const b = new LinkedList();
b.Insert(900)
b.Insert(200)
b.Insert(400);   
b.Insert(600);   // Insert at the end
b.Insert(700);   // Insert at the end
b.Insert(800);   // Insert at the end
//b.Atindex(2, 100);  // Insert at the beginning
//b.Atindex(1, 200);  // Insert at index 1
//b.Atindex(2, 300);  // Insert at index 2
//b.size();           // Output: 4
// b.removeTop()
// b.removeLast()
b.removeAtindex(3)
b.printTheList();   // Output: 100 200 300 400 
