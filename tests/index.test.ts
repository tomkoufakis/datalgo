import { ArrayList } from '../src/';

test('Create', () => {
    let a = new ArrayList<Number>();
    expect(a.getSize()).toBe(0);
});