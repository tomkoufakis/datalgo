import { Stack } from "./stack";

class ArrayStack<T> implements Stack<T> {

    private stack: T[];
    private topOfStack: number;

    constructor(size: number) {
        this.stack = (new Array<T>(size)).slice();
        this.topOfStack = -1;
    }

    push(item: T): void {
        if (this.topOfStack < (this.stack.length - 1)) {
            // hasn't reached the end yet
            this.stack[++this.topOfStack] = item;
        } else {
            // out of space
            throw new Error("Stack is out of space");
        }
    }

    pop(): T | null {
        if (this.topOfStack == -1) {
            return null;
        } else {
            const value = this.stack[this.topOfStack];
            this.topOfStack--;
            return value;
        }
    }
    peek(): T | null {
        if (this.topOfStack == -1) {
            return null;
        } else {
            return this.stack[this.topOfStack];
        }
    }
    getSize(): number {
        return this.topOfStack + 1;
    }
    clear(): void {
        this.topOfStack = -1;
    }


}

export { ArrayStack };