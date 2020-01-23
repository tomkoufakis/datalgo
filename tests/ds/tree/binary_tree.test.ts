import { BinaryTree } from '../../../src/ds/tree/binary_tree';
import { TraversalMode } from '../../../src/ds/tree/tree';
import { Node } from '../../../src/ds/tree/node';

test('Create', () => {
    let a = new BinaryTree<Number>();
    expect(a.getSize()).toBe(0);
});

test('insert head', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    expect(a.getSize()).toBe(1);
});

test('insert 3 node tree', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    a.insert(2);
    a.insert(3);
    expect(a.getSize()).toBe(3);
    let orderedData: Number[] = [];
    a.traverse((node: Node<Number>) => {
        orderedData.push(node.value);
        return false;
    }, TraversalMode.LevelOrder);
    expect(orderedData).toStrictEqual([1,2,3]);
});

test('insert 5 node tree', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    a.insert(2);
    a.insert(3);
    a.insert(4);
    a.insert(5);
    expect(a.getSize()).toBe(5);
    let orderedData: Number[] = [];
    a.traverse((node: Node<Number>) => {
        orderedData.push(node.value);
        return false;
    }, TraversalMode.LevelOrder);
    expect(orderedData).toStrictEqual([1,2,3,4,5]);
});

test('Delete root', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    a.insert(2);
    a.insert(3);
    a.insert(4);
    a.insert(5);
    expect(a.getSize()).toBe(5);
    const item = a.search(1);
    expect(item).toBeDefined();
    expect(item!.value).toBe(1);
    a.delete(item!);
    let orderedData: Number[] = [];
    a.traverse((node: Node<Number>) => {
        orderedData.push(node.value);
        return false;
    }, TraversalMode.LevelOrder);
    expect(a.getSize()).toBe(4);
    expect(a.search(1)).toBe(null);
    // 3 is promoted 
    expect(orderedData).toStrictEqual([3,2,4,5]);
});

test('Delete leaf', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    a.insert(2);
    a.insert(3);
    a.insert(4);
    a.insert(5);
    expect(a.getSize()).toBe(5);
    a.delete(a.search(5)!);
    expect(a.getSize()).toBe(4);
    expect(a.search(5)!).toBe(null);
});

test('Delete node', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    a.insert(2);
    a.insert(3);
    a.insert(4);
    a.insert(5);
    expect(a.getSize()).toBe(5);
    a.delete(a.search(2)!);
    expect(a.getSize()).toBe(4);
    expect(a.search(2)!).toBe(null);
});

test('Delete node', () => {
    let a = new BinaryTree<Number>();
    expect(() => { a.delete(null!); }).toThrow();
});

test('Delete left node', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    a.insert(2);
    a.insert(3);
    a.insert(4);
    a.insert(5);
    a.insert(6);
    a.insert(7);
    a.insert(8);
    expect(a.getSize()).toBe(8);
    a.delete(a.search(1)!);
    expect(a.getSize()).toBe(7);
    expect(a.search(1)!).toBe(null);
});

test('Search value', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    a.insert(2);
    a.insert(3);
    a.insert(4);
    a.insert(5);
    expect(a.getSize()).toBe(5);
    expect(a.search(2)!).toBeDefined();
    expect(a.search(2)!.value).toBe(2);
});

test('Clear', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    expect(a.getSize()).toBe(1);
    a.delete(a.search(1)!);
    expect(a.getSize()).toBe(0);
    expect(a.search(1)).toBe(null);
});

test('Invalid traversal mode', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    expect(() => {
        a.traverse(() => { return false; }, <TraversalMode><unknown>"undefined");
    }).toThrow();
});

test('Preorder traversal mode', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    a.insert(2);
    a.insert(3);
    a.insert(4);
    a.insert(5);
    let orderedData: Number[] = [];
    a.traverse((node: Node<Number>) => { 
            orderedData.push(node.value);
            return false; 
        }, TraversalMode.PreOrder);
    expect(orderedData).toStrictEqual([1,2,4,5,3]);
});

test('Preorder traversal mode with early exit', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    a.insert(2);
    a.insert(3);
    a.insert(4);
    a.insert(5);
    let orderedData: Number[] = [];
    a.traverse((node: Node<Number>) => { 
            orderedData.push(node.value);
            return true; 
        }, TraversalMode.PreOrder);
    expect(orderedData).toStrictEqual([1]);
});

test('Postorder traversal mode', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    a.insert(2);
    a.insert(3);
    a.insert(4);
    a.insert(5);
    let orderedData: Number[] = [];
    a.traverse((node: Node<Number>) => { 
            orderedData.push(node.value);
            return false; 
        }, TraversalMode.PostOrder);
    expect(orderedData).toStrictEqual([4,5,2,3,1]);
});

test('Postorder traversal mode with early exit', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    a.insert(2);
    a.insert(3);
    a.insert(4);
    a.insert(5);
    let orderedData: Number[] = [];
    a.traverse((node: Node<Number>) => { 
            orderedData.push(node.value);
            return true; 
        }, TraversalMode.PostOrder);
    expect(orderedData).toStrictEqual([4,5,2,3,1]);
});

test('InOrder traversal mode', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    a.insert(2);
    a.insert(3);
    a.insert(4);
    a.insert(5);
    let orderedData: Number[] = [];
    a.traverse((node: Node<Number>) => { 
            orderedData.push(node.value);
            return false; 
        }, TraversalMode.InOrder);
    expect(orderedData).toStrictEqual([4,2,5,1,3]);
});

test('Inorder traversal mode with early exit', () => {
    let a = new BinaryTree<Number>();
    a.insert(1);
    a.insert(2);
    a.insert(3);
    a.insert(4);
    a.insert(5);
    let orderedData: Number[] = [];
    a.traverse((node: Node<Number>) => { 
            orderedData.push(node.value);
            return true; 
        }, TraversalMode.InOrder);
    expect(orderedData).toStrictEqual([4,2,1]);
});