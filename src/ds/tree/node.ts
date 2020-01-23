/**
 * A node in a Tree
 */
export class Node<T> {
    /**
     * The value of the node
     */
    value: T;
    /**
     * The left node in the tree
     */
    left: Node<T> | null;
    /**
     * The left node in the tree
     */
    right: Node<T> | null;
    /**
     * The parent node in the tree
     */
    parent: Node<T> | null;
  
    constructor(value: T, left: Node<T> | null, right: Node<T> | null, parent: Node<T> | null) {
      this.value = value;
      this.left = left;
      this.right = right;
      this.parent = parent;
    }
  }
  