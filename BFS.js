class Node {
    constructor(data) {
        this.data = data; // Correct assignment
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    makeTree(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(root, val) {
        if (root === null) {
            return false;
        } else if (root.data === val) {
            return true;
        } else if (root.data > val) {
            return this.search(root.left, val);
        } else {
            return this.search(root.right, val);
        }
    }

    delete(val) {
        this.root = this.deleteNode(this.root, val);
    }

    deleteNode(root, val) {
        if (root === null) {
            return null;
        }

        if (val < root.data) {
            root.left = this.deleteNode(root.left, val);
        } else if (val > root.data) {
            root.right = this.deleteNode(root.right, val);
        } else {
            
            if (root.left === null && root.right === null) {
                return null;
            }

            
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }
            
            let minNode = this.findMinNode(root.right);
            root.data = minNode.data;
            root.right = this.deleteNode(root.right, minNode.data);
        }
        return root;
    }

    findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

let b1 = new BST();
b1.makeTree(20);
b1.makeTree(10);
b1.makeTree(30);
b1.makeTree(5);
b1.makeTree(15);
b1.makeTree(25);
b1.makeTree(35);

console.log('Tree before deletion:');
console.log(JSON.stringify(b1.root, null, 2));

console.log('Deleting 10:');
b1.delete(10);


console.log('Deleting 20:');


console.log('Deleting 5:');
b1.delete(5);