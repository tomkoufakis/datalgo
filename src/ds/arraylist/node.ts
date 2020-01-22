/**
 * A node in a ArrayList
 */
export class Node<T> {
    /**
     * The value of the node
     */
    value: T;
    /**
     * The next node in the list
     */
    next: Node<T> | null;
  
    constructor(value: T, next: Node<T> | null) {
      this.value = value;
      this.next = next;
    }
  }