abstract class Vehicle {
    abstract wheels: number;

    start(): string {
        return "brummmm";
    }
}

class Car extends Vehicle {
    wheels = 4;
}

let car = new Car();
console.log(car.wheels);
console.log(car.start());