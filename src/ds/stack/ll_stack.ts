import { ArrayList } from "../arraylist";
import { Stack } from "./stack";

class LLStack<T> implements Stack<T> {

    private list: ArrayList<T>;

    constructor() {
        this.list = new ArrayList<T>();
    }

    push(item: T): void {
        this.list.insert(item, 0);
    }
    pop(): T | null {
        if (this.list.getSize() == 0) {
            return null;
        } else {
            const data = this.list.get(0);
            this.list.delete(0);
            return data;
        }
    }
    peek(): T | null {
        if (this.list.getSize() == 0) {
            return null;
        } else {
            return this.list.get(0);
        }
    }
    getSize(): number {
        return this.list.getSize();
    }
    clear(): void {
        this.list.delete_all();
    }


}

export { LLStack };