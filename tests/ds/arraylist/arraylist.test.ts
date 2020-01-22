import { ArrayList } from '../../../src/ds/arraylist';

test('Create', () => {
    let a = new ArrayList<Number>();
    expect(a.getSize()).toBe(0);
});

test('Add', () => {
    let a = new ArrayList<Number>();
    a.add(1);
    expect(a.getSize()).toBe(1);
    expect(a.get(0)).toBe(1);
});

test('Add 2', () => {
    let a = new ArrayList<Number>();
    a.add(1);
    a.add(2);
    expect(a.getSize()).toBe(2);
    expect(a.get(0)).toBe(1);
    expect(a.get(1)).toBe(2);
});

test('Insert at 0', () => {
    let a = new ArrayList<Number>();
    a.add(1);
    a.add(2);
    a.insert(3, 0);
    expect(a.getSize()).toBe(3);
    expect(a.get(0)).toBe(3);
    expect(a.get(1)).toBe(1);
    expect(a.get(2)).toBe(2);
});

test('Insert at tail', () => {
    let a = new ArrayList<Number>();
    a.add(1);
    a.add(2);
    a.insert(3, 2);
    expect(a.getSize()).toBe(3);
    expect(a.get(0)).toBe(1);
    expect(a.get(1)).toBe(2);
    expect(a.get(2)).toBe(3);
});

test('Insert at middle', () => {
    let a = new ArrayList<Number>();
    a.add(1);
    a.add(2);
    a.add(3);
    a.add(4);
    a.insert(5, 2);
    expect(a.getSize()).toBe(5);
    expect(a.get(0)).toBe(1);
    expect(a.get(1)).toBe(2);
    expect(a.get(2)).toBe(5);
    expect(a.get(3)).toBe(3);
    expect(a.get(4)).toBe(4);
});

test('Delete all', () => {
    let a = new ArrayList<Number>();
    a.add(1);
    a.add(2);
    a.add(3);
    a.add(4);
    a.delete_all();
    expect(a.getSize()).toBe(0);
});

test('Delete from head', () => {
    let a = new ArrayList<Number>();
    a.add(1);
    a.add(2);
    a.add(3);
    a.add(4);
    a.delete(0);
    expect(a.getSize()).toBe(3);
    expect(a.get(0)).toBe(2);
});


test('Delete from tail', () => {
    let a = new ArrayList<Number>();
    a.add(1);
    a.add(2);
    a.add(3);
    a.add(4);
    a.delete(3);
    expect(a.getSize()).toBe(3);
    expect(a.get(2)).toBe(3);
});

test('Get test', () => {
    let a = new ArrayList<Number>();

    for (let i = 0; i < 1000; i++)
    {
        a.add(i);
    }
    expect(a.getSize()).toBe(1000);

    for (let i = 0; i < 1000; i++)
    {
        expect(a.get(i)).toBe(i);
    }
    expect(a.getSize()).toBe(1000);
});

test('Deep test', () => {
    let a = new ArrayList<Number>();

    for (let i = 0; i < 1000; i++)
    {
        const index = Math.floor(Math.random() * a.getSize());
        a.insert(i, index);
    }
    expect(a.getSize()).toBe(1000);
    
    for (let i = 0; i < 1000; i++)
    {
        const index = Math.floor(Math.random() * a.getSize());
        a.delete(index);
    }
    expect(a.getSize()).toBe(0);
});