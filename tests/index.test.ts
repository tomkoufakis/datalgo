import { ArrayList, LLStack } from '../src/';

test('Create ArrayList', () => {
    let a = new ArrayList<Number>();
    expect(a.getSize()).toBe(0);
});

test('Create LLStack', () => {
    let a = new LLStack<Number>();
    expect(a.getSize()).toBe(0);
});