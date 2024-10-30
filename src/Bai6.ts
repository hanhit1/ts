class Vehicle {
    public brand: string;
    private price: number;
    protected model: string;
    readonly year: number;
  
    constructor(brand: string, price: number, model: string, year: number) {
        this.brand = brand;
        this.price = price;
        this.model = model;
        this.year = year;
    }
}
class Car extends Vehicle {
    private color: string;
    constructor(brand: string, price: number, model: string, year: number, color: string) {
        super(brand, price, model, year);
        this.color = color;
    }
    public display(): void {
        console.log(`Brand: ${this.brand}`);
        //console.log(`Price: ${this.price}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Color: ${this.color}`);
    }
}
const car = new Car('Toyota', 10000, 'Vios', 2020, 'Red');
car.brand = 'Honda';