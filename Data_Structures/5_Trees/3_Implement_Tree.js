//        9
//   4         20
//1     6   15   170

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = {
            left: null,
            right: null,
            value: value
        }
        if (this.root == null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (currentNode.left == null) {
                        currentNode.left = newNode;
                        return;
                    }
                    currentNode = currentNode.left;
                    // return;

                } else if (value > currentNode.value) {
                    if (currentNode.right == null) {
                        currentNode.right = newNode;
                        return;
                    }
                    currentNode = currentNode.right;
                }

            }
        }
    }
    lookup(value) {
        if (this.root.value == value) {
            console.log(this.root);
        } else {
            let currentNode = this.root;
            while (currentNode) {
                if (value < currentNode.value) {
                    currentNode = currentNode.left;
                } else if (value > currentNode.value) {
                    currentNode = currentNode.right;
                } else if (value == currentNode.value) {
                    console.log(currentNode);
                    return;
                } else {
                    return false;
                }

            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
// console.log(tree);
JSON.stringify(traverse(tree.root))
// tree.lookup(4);

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}