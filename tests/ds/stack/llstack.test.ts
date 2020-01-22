import { LLStack } from '../../../src/ds/stack/ll_stack';

test('Create', () => {
    let a = new LLStack<Number>();
    expect(a.getSize()).toBe(0);
});

test('push', () => {
    let a = new LLStack<Number>();
    a.push(1);
    expect(a.getSize()).toBe(1);
    expect(a.peek()).toBe(1);
});

test('Add 2', () => {
    let a = new LLStack<Number>();
    a.push(1);
    a.push(2);
    expect(a.getSize()).toBe(2);
    expect(a.peek()).toBe(2);
});

test('Pop', () => {
    let a = new LLStack<Number>();
    a.push(1);
    a.push(2);
    expect(a.getSize()).toBe(2);
    expect(a.pop()).toBe(2);
    expect(a.getSize()).toBe(1);
});

test('Pop with 0', () => {
    let a = new LLStack<Number>();
    expect(a.getSize()).toBe(0);
    expect(a.pop()).toBe(null);
});

test('Peek', () => {
    let a = new LLStack<Number>();
    a.push(1);
    a.push(2);
    expect(a.getSize()).toBe(2);
    expect(a.peek()).toBe(2);
    expect(a.getSize()).toBe(2);
});

test('Peek', () => {
    let a = new LLStack<Number>();
    expect(a.peek()).toBe(null);
});

test('Clear', () => {
    let a = new LLStack<Number>();
    a.push(1);
    a.push(2);
    a.push(3);
    a.push(4);
    a.clear();
    expect(a.getSize()).toBe(0);
});
