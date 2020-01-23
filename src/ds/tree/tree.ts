import { Node } from "./node";

enum TraversalMode {
    /**
     * Depth first search, call cb between left and right traversals
     */
    InOrder,
    /**
     * Depth first search, call cb before left or right traversals
     */
    PreOrder,
    /**
     * Depth first search, call cb after left and right traversals
     */
    PostOrder,
    /**
     * Do a breadth first search
     */
    LevelOrder 
}

interface Tree<T> {

    /**
     * Inserts value into the tree
     * @param value The value to insert
     */
    insert(value: T): void;

    /**
     * Delete's a node from the tree
     * @param node The node to delete
     */
    delete(node: Node<T>): void;

    /**
     * Searches the tree for a value
     * @param value The data to find or null
     */
    search(value: T): Node<T> | null;

    /**
     * Traverses the tree, visiting each node and calling cb
     * @param cb The callback function to call when each node is visited in the tree. 
     *              The traversal will stop when cb returns true
     * @param mode The traversal mode for the tree
     */
    traverse(cb: (node: Node<T>) => boolean, mode: TraversalMode): void;

    /**
     * Gets the count of elements in the tree
     */
    getSize(): number;
}

export { Tree, TraversalMode }