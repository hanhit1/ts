
abstract class Vehicle {
    constructor(protected brand: string) {}

    abstract move(): void;
}

class Car extends Vehicle {
    private fuel: number;

    constructor(brand: string, fuel: number) {
        super(brand);
        this.fuel = fuel;
    }

    refuel(amount: number): void {
        this.fuel += amount;
    }

    move(): void {
        if (this.fuel > 0) {
            console.log(`${this.brand} is moving with fuel.`);
            this.fuel--;
        } else {
            console.log(`${this.brand} has no fuel.`);
        }
    }
}

class ElectricCar extends Vehicle {
    private batteryLevel: number;

    constructor(brand: string, batteryLevel: number) {
        super(brand);
        this.batteryLevel = batteryLevel;
    }

    charge(amount: number): void {
        this.batteryLevel += amount;
    }


    move(): void {
        if (this.batteryLevel > 0) {
            console.log(`${this.brand} is moving with battery.`);
            this.batteryLevel--;
        } else {
            console.log(`${this.brand} has no battery.`);
        }
    }
}


const myCar = new Car("Toyota", 10);
myCar.move(); 
myCar.refuel(5);

const myElectricCar = new ElectricCar("Tesla", 100);
myElectricCar.move();
myElectricCar.charge(10);
const vihicles: Vehicle[] = [myCar, myElectricCar];
vihicles.forEach(v => v.move());