import { Node } from "./node";
import { BinaryTree } from "./binary_tree"

class BinarySearchTree<T> extends BinaryTree<T> {

    constructor() {
        super();
    }

    insert(value: T): void {
        const newNode = new Node<T>(value, null, null, null);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let parent: Node<T> = this.findParentByValue(value);
            newNode.parent = parent;
            if (parent.left == null && parent.value > newNode.value) {
                parent.left = newNode;
            } else if (parent.right == null && parent.value < newNode.value) {
                parent.right = newNode;
            } else {
                throw new Error("There was a problem inserting " + value + " at parent");
            }
        }
        this.size++;
    }

    delete(node: Node<T>): void {
        this.deleteNode(node, node.value);
    }

    deleteValue(value: T): void {
        this.head = this.deleteRecursively(this.head, value);
    }

    private deleteNode(head: Node<T>, value: T): Node<T> | null {
        // found the key to delete
        if (head.left == null) {
            // delete current node and pass the right subtree
            return head.right;
        } else if (head.right == null) {
            // delete current node and pass the left subtree
            return head.left;
        } else {
            // node with two children. Get the smallest value in right tree
            head.value = this.minValue(head.right);
            // delete the smallest value in the right tree
            head.right = this.deleteRecursively(head.right, value);
        }

        return head;
    }

    private deleteRecursively(head: Node<T> | null, value: T): Node<T> | null {
        if (head == null) {
            return null;
        }

        if (value < head.value) {
            head.left = this.deleteRecursively(head.left, value);
        } else if (value > head.value) {
            head.right = this.deleteRecursively(head.right, value);
        } else {
            head = this.deleteNode(head, head.value);
        }

        return head;
    }

    /**
     * Gets the minimum value in the tree
     * @param root The node to get the min value for
     */
    private minValue(root: Node<T>): T {
        let currValue: Node<T> = root;
        let minValue: T = root.value;
        while (currValue.left != null) {
            currValue = currValue.left;
            minValue = currValue.value;
        }
        return minValue;
    }

    isLeaf(node: Node<T>) : Boolean {
        return node.left == null && node.right == null;
    }

    search(value: T): Node<T> | null {
        return this.searchRecusively(null, this.head, value);
    }

    searchRecusively(cb: ((node: Node<T> | null) => boolean) | null, head: Node<T> | null, value: T): Node<T> | null {

        if (cb != null && cb(head)) {
            return head;
        }

        if (head == null) {
            return null;
        } else if (head.value == value) {
            return head;
        } else if (head.value > value) {
            return this.searchRecusively(cb, head.left, value);
        } else {
            return this.searchRecusively(cb,head.right, value);
        }
    }

    private findParentByValue(item: T): Node<T> {
        let parent: Node<T> = <Node<T>>this.searchRecusively((node: Node<T> | null) => {
            return true;
        }, this.head, item);

        return parent;
    }

    getSize(): number {
        return this.size;
    }
}

export { BinarySearchTree }