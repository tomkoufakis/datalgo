import { CircularQueue } from '../../../src/ds/queue/circular_queue';

test('Create', () => {
    let a = new CircularQueue<Number>(1);
    expect(a.getSize()).toBe(0);
});

test('enqueue', () => {
    let a = new CircularQueue<Number>(2);
    a.enqueue(1);
    expect(a.getSize()).toBe(1);
    expect(a.peek()).toBe(1);
});

test('enqueue 2', () => {
    let a = new CircularQueue<Number>(3);
    a.enqueue(1);
    a.enqueue(2);
    expect(a.getSize()).toBe(2);
    expect(a.peek()).toBe(1);
});

test('enqueue max items', () => {
    let a = new CircularQueue<Number>(2);
    a.enqueue(1);
    a.enqueue(2);
    expect(a.getSize()).toBe(2);
    expect(a.peek()).toBe(1);
    expect(() => { a.enqueue(2); }).toThrow();
});

test('enqueue wrap', () => {
    let a = new CircularQueue<Number>(5);
    a.enqueue(1);
    a.enqueue(2);
    a.enqueue(3);
    a.enqueue(4);
    expect(a.getSize()).toBe(4);
    expect(a.dequeue()).toBe(1);
    expect(a.getSize()).toBe(3);
    a.enqueue(5);
    a.enqueue(6);
    expect(a.getSize()).toBe(5);
    expect(a.dequeue()).toBe(2);
    expect(a.dequeue()).toBe(3);
    expect(a.dequeue()).toBe(4);
    expect(a.dequeue()).toBe(5);
    expect(a.dequeue()).toBe(6);
    expect(a.getSize()).toBe(0);
    a.enqueue(7);
    expect(a.getSize()).toBe(1);
    expect(a.dequeue()).toBe(7);
});

test('Dequeue', () => {
    let a = new CircularQueue<Number>(3);
    a.enqueue(1);
    a.enqueue(2);
    expect(a.getSize()).toBe(2);
    expect(a.dequeue()).toBe(1);
    expect(a.dequeue()).toBe(2);
    expect(a.getSize()).toBe(0);
    expect(a.dequeue()).toBe(null);
});

test('Peek', () => {
    let a = new CircularQueue<Number>(3);
    a.enqueue(1);
    a.enqueue(2);
    expect(a.getSize()).toBe(2);
    expect(a.peek()).toBe(1);
    expect(a.getSize()).toBe(2);
});

test('Peek', () => {
    let a = new CircularQueue<Number>(2);
    expect(a.peek()).toBe(null);
});

test('Clear', () => {
    let a = new CircularQueue<Number>(6);
    a.enqueue(1);
    a.enqueue(2);
    a.enqueue(3);
    a.enqueue(4);
    a.clear();
    expect(a.getSize()).toBe(0);
});
