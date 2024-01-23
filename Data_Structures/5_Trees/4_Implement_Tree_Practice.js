class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = {
            value: value,
            left: null,
            right: null
        }
        if (this.root == null) {
            this.root = newNode;
            return;
        }
        let root = this.root;
        while (true) {
            if (value < root.value) {
                if (root.left == null) {
                    root.left = newNode;
                    return;
                }
                root = root.left;
            } else if (value > root.value) {
                if (root.right == null) {
                    root.right = newNode;
                    return;
                }
                root = root.right;

            }
        }
    }

    lookup(value) {
        console.log("inside lookup");
        if (this.root.value == value) {
            console.log(this.root);
            return;
        } else {
            console.log("inside lookup else");
            let root = this.root;
            while (true) {
                if (value < root.value) {
                    if (root.left != null) {
                        root = root.left;
                    } else {
                        console.log("not found");
                        return;
                    }
                } else if (value > root.value) {
                    if (root.right != null) {
                        root = root.right;
                    } else {
                        console.log("not found");
                        return;
                    }
                } else if (value == root.value) {
                    console.log(root);
                    return;
                }
            }
        }
    }
}

const tree = new BinaryTree();
tree.insert(29);
tree.insert(25);
tree.insert(33);
tree.insert(20);
tree.insert(27);
tree.insert(31);
tree.insert(35);
tree.insert(30);
tree.insert(32);
tree.insert(37);
tree.insert(24);
// console.log(JSON.stringify(traverse(tree.root)))

tree.lookup(2);


function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}