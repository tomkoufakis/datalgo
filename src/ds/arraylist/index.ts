import { Node } from './node';

/**
 * A reference based list implementation
 */
interface List<T> {
  /**
   * Adds a value to the list
   * @param value The data to add
   */
  add(value: T): void;
  /**
   * Inserts a value in the list
   * @param value The data to add
   * @param index The location to add the value to
   */
  insert(value: T, index: number): void;
  /**
   * The accessor for the list
   */
  get(index: number): T;
  /**
   * Delete all elements
   */
  delete_all(): void;
  /**
   * Delete an item at index
   * @param index The 0 based index to delete the item at.
   */
  delete(index: number): void;

  /**
   * Gets the size of the array
   */
  getSize(): number;
}

/**
 * See the [[List]] interface for details
 */
class ArrayList<T> implements List<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value: T) {
    if (this.head == null) {
      this.head = new Node(value, null);
      this.tail = this.head;
    } else {
      const node = new Node(value, null);
      this.tail!.next = node;
      this.tail = node;
    }
    this.size++;
  }

  insert(value: T, index: number): void {
    if (index < 0 || index > this.size) {
      throw new Error('index out of bounds');
    }

    if (this.head == null) {
      this.head = new Node(value, null);
      this.tail = this.head;
    } else if (index === 0) {
      const node = new Node<T>(value, this.head);
      this.head = node;
    } else if (index === this.size) {
      const node = new Node<T>(value, null);
      this.tail!.next = node;
      this.tail = node;
    } else {
      const node = new Node<T>(value, null);
      const current: Node<T> = this.getNode(index - 1);
      node.next = current.next;
      current.next = node;
    }

    this.size++;
  }

  get(index: number): T {
    return this.getNode(index).value;
  }

  private getNode(index: number): Node<T> {
    if (index < 0 || index >= this.size) {
      throw new Error('index out of bounds');
    }
    let current: Node<T> = this.head!;
    for (let i = 1; i <= index; i++) {
      current = current.next!;
    }

    return current;
  }

  delete_all(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  delete(index: number): void {
    if (index < 0 || index >= this.size) {
      throw new Error('index out of bounds');
    }

    if (this.size === 1) {
      this.head = this.tail = null;
    } else if (index === 0) {
      this.head = this.head!.next;
    } else {
      const parent: Node<T> = this.getNode(index - 1);
      const current: Node<T> | null = parent.next;
      const next: Node<T> | null = current!.next;
      parent.next = next;
      this.tail = next == null ? current : parent;
    }

    this.size--;
  }

  getSize(): number {
    return this.size;
  }
}

export { ArrayList };
