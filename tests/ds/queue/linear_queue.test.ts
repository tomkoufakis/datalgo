import { LinearQueue } from '../../../src/ds/queue/linear_queue';

test('Create', () => {
    let a = new LinearQueue<Number>();
    expect(a.getSize()).toBe(0);
});

test('enqueue', () => {
    let a = new LinearQueue<Number>();
    a.enqueue(1);
    expect(a.getSize()).toBe(1);
    expect(a.peek()).toBe(1);
});

test('enqueue 2', () => {
    let a = new LinearQueue<Number>();
    a.enqueue(1);
    a.enqueue(2);
    expect(a.getSize()).toBe(2);
    expect(a.peek()).toBe(1);
});

test('Dequeue', () => {
    let a = new LinearQueue<Number>();
    a.enqueue(1);
    a.enqueue(2);
    expect(a.getSize()).toBe(2);
    expect(a.dequeue()).toBe(1);
    expect(a.dequeue()).toBe(2);
    expect(a.getSize()).toBe(0);
    expect(a.dequeue()).toBe(null);
});

test('Peek', () => {
    let a = new LinearQueue<Number>();
    a.enqueue(1);
    a.enqueue(2);
    expect(a.getSize()).toBe(2);
    expect(a.peek()).toBe(1);
    expect(a.getSize()).toBe(2);
});

test('Peek', () => {
    let a = new LinearQueue<Number>();
    expect(a.peek()).toBe(null);
});

test('Clear', () => {
    let a = new LinearQueue<Number>();
    a.enqueue(1);
    a.enqueue(2);
    a.enqueue(3);
    a.enqueue(4);
    a.clear();
    expect(a.getSize()).toBe(0);
});
