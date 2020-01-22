import { ArrayList } from "../arraylist";
import { Queue } from "./queue";

class LinearQueue<T> implements Queue<T> {

    private q: ArrayList<T>;

    constructor() {
        this.q = new ArrayList<T>();
    }

    enqueue(item: T): void {
        this.q.insert(item, this.q.getSize());
    }

    dequeue(): T | null {
        if (this.q.getSize() == 0) {
            return null;
        } else {
            const data = this.q.get(0);
            this.q.delete(0);
            return data;
        }
    }

    peek(): T | null {
        if (this.q.getSize() == 0) {
            return null;
        } else {
            return this.q.get(0);
        }
    }
    getSize(): number {
        return this.q.getSize();
    }
    clear(): void {
        this.q.delete_all();
    }


}

export { LinearQueue };