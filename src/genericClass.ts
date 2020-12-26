class List<T> {
    private data: T[];

    constructor(...elements: T[]) {
        this.data = elements;
    }

    add(element: T): void {
        this.data.push(element);
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements);
    }

    getAll(): T[] {
        return this.data;
    }
}

let random = new List<number>(1, 2, 3);
console.log(random)