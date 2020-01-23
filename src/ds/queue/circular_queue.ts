import { Queue } from "./queue";

/**
 * Implements a circular queue using an array of fixed size
 */
class CircularQueue<T> implements Queue<T> {

    private q: T[];
    private front: number;
    private back: number;
    private maxSize: number;

    /**
     * a circular queue using an array of fixed size
     * @param size The maximum number of elements the queue can hold
     */
    constructor(size: number) {
        this.q = (new Array<T>(size)).slice();
        this.front = this.back = -1;
        this.maxSize = size;
    }

    enqueue(item: T): void {
        if (this.getSize() === 0) {
            // the queue is empty
            this.q[++this.back] = item;
            this.front = this.back;
        } else if (this.getSize() === this.maxSize) {
            // queue is full
            throw new Error("The queue is full");
        } else if (this.back === (this.maxSize - 1)) {
            // we are at the end of the array, wrap if possible
            this.back = 0;
            this.q[this.back] = item;
        } else {
            // either we are wrapped or we are inserting normally
            this.q[++this.back] = item;
        }

    }

    dequeue(): T | null {
        if (this.getSize() === 0) {
            return null;
        } else {
            const value = this.q[this.front];
            this.q[this.front] = <T><unknown>0;
            if (this.front == (this.maxSize - 1) && this.front != this.back) {
                this.front = 0;
            } else if (this.front == this.back) {
                this.front = this.back = -1;
            } else {
                this.front++;
            }
            return value;
        }
    }

    peek(): T | null {
        if (this.getSize() === 0) {
            return null;
        } else {
            return this.q[this.front];
        }
    }
    getSize(): number {
        if (this.front === -1) {
            return 0;
        } else if (this.front === this.back) {
            return 1;
        } else if (this.front < this.back) {
            return this.back - this.front + 1;
        } else {
            return this.maxSize - (this.front - this.back) + 1;
        }
    }
    clear(): void {
        this.front = this.back = -1;
    }


}

export { CircularQueue };