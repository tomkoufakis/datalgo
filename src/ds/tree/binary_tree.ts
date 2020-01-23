import { Tree, TraversalMode } from "./tree";
import { Node } from "./node";
import { LinearQueue } from "../queue";

class BinaryTree<T> implements Tree<T> {
    private head: Node<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(value: T): void {
        const newNode = new Node<T>(value, null, null, null);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let firstLeaf: Node<T> = this.findFirstLeaf();
            newNode.parent = firstLeaf;
            if (firstLeaf.left == null) {
                firstLeaf.left = newNode;
            } else {
                firstLeaf.right = newNode;
            }
        }
        this.size++;
    }

    delete(node: Node<T>): void {
        if (node == null) {
            throw new Error("Cannot delete a null node");
        } else if (node == this.head && this.size == 1) {
            this.head = null;
            this.size = 0;
        } else {
            let nodeToDelete: Node<T> = this.findFirstLeaf();
            node.value = nodeToDelete.value;
            if (nodeToDelete.parent?.left == nodeToDelete) {
                nodeToDelete.parent.left = null;
            }
            if (nodeToDelete.parent?.right == nodeToDelete) {
                nodeToDelete.parent.right = null;
            }
            this.size--;
        }
    }
    search(value: T): Node<T> | null {
        let item: Node<T> | null = null;
        this.levelOrderTraversal(this.head, (node: Node<T>) => {
            if (node.value == value) {
                item = node;
                return true;
            }
            return false;
        });

        return item;
    }

    private findFirstLeaf(): Node<T> {
        let parent: Node<T>;
        this.levelOrderTraversal(this.head, (node: Node<T>) => {
            if (node.left == null || node.right == null) {
                parent = node;
                return true;
            } else {
                return false;
            }
        });

        // will not be null since as a precondition this fn should never be called with a null root
        return parent!;
    }

    traverse(cb: (node: Node<T>) => boolean, mode: TraversalMode): void {
        if (mode == TraversalMode.LevelOrder) {
            this.levelOrderTraversal(this.head, cb);
        } else {
            this.recursiveTraverse(this.head, cb, mode);
        }
    }

    private levelOrderTraversal(root: Node<T> | null, cb: (node: Node<T>) => boolean) {
        if (root == null) {
            return;
        }

        const q: LinearQueue<Node<T>> = new LinearQueue<Node<T>>();
        q.enqueue(root);

        
        while (q.getSize() != 0) {
            let node: Node<T> = q.dequeue()!;
            if (node.left != null) {
                q.enqueue(node.left!);
            }
            if (node.right != null) {
                q.enqueue(node.right!);
            }

            if (cb(node)) {
                break;
            }
        }
    }

    private recursiveTraverse(root: Node<T> | null, cb: (node: Node<T>) => boolean, mode: TraversalMode) {
        if (root == null) {
            return;
        }

        switch (mode) {
            case TraversalMode.PreOrder:
                if (cb(root)) {
                    break;
                }
                this.recursiveTraverse(root.left, cb, mode);
                this.recursiveTraverse(root.right, cb, mode);
                break;
            case TraversalMode.InOrder:
                this.recursiveTraverse(root.left, cb, mode);
                if (cb(root)) {
                    break;
                }
                this.recursiveTraverse(root.right, cb, mode);
                break;
            case TraversalMode.PostOrder:
                this.recursiveTraverse(root.left, cb, mode);
                this.recursiveTraverse(root.right, cb, mode);
                if (cb(root)) {
                    break;
                }
                break;
            default:
                throw new Error("Unsupported mode for recursive traversal");
        }
    }

    getSize(): number {
        return this.size;
    }
}

export { BinaryTree }