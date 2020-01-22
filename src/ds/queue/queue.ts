/**
 * A FIFO queue interface
 */
export interface Queue<T> {
    /**
     * Enqueues an item to the queue
     * @param item the data to add
     */
    enqueue(item: T): void;
    /**
     * Dequeues an item off the queue
     */
    dequeue(): T | null;
    /**
     * Gets the item at the front of the queue without removing it
     */
    peek(): T | null;
    /**
     * Gets the number of items in the queue
     */
    getSize(): number;
    /**
     * Empties the queue
     */
    clear(): void;
}