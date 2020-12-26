function getName(name: string): string {
    return `Hello, my name is ${name}`
}

// console.log(getName("Rizki"));

function greeting(): void {
    console.log("Hello World!");
}

// greeting();

//////////////////////////////////

function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

const result = multiply(5, 2);
// console.log(result);

//////////////////////////////////

// type Age = number;
// let age: Age = 18;

type Tambah = (val1: number, val2: number) => number;

const add: Tambah = (val1: number, val2: number) => {
    return val1 + val2;
}

console.log(add(1, 2))