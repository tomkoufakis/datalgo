/**
 * A stack interface
 */
export interface Stack<T> {
    /**
     * Add an item to the stack
     * @param item the data to add
     */
    push(item: T): void;
    /**
     * Pops an item off the stack
     */
    pop(): T | null;
    /**
     * Gets the item at the top of the stack without removing it
     */
    peek(): T | null;
    /**
     * Gets the number of items in the stack
     */
    getSize(): number;
    /**
     * Empties the stack
     */
    clear(): void;
}