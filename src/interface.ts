interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    constructor(public name: string) {
        
    }
    on(): void {
        console.log('Nyala');
    }
    off(): void {
        console.log('Mati');
    }
}

console.log(new Asus('Asus Zephyrus').name);