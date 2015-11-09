class Stack<T> {
    private elements: T[];

    constructor(...initialElements: T[]) {
        this.elements = initialElements;
    }

    pop(): T {
        return this.elements.pop();
    }

    //push(element: T) {
    //    this.elements.push(element);
    //}
}
