class Calculator {
        
    add(a: number, b: number): number;            
    add(a: number, b: number, c: number): number;   
    add(a: number, b: number, c?: number): number { 
        if (c !== undefined) {
            return a + b + c; 
        }
        return a + b; 
    }
}


const calc = new Calculator();
console.log(calc.add(2, 3));          
console.log(calc.add(2, 3, 4));   
class Animal {
speak(): void {
  console.log("Animal speaks");
}
}

class Dog extends Animal {

speak(): void {
  console.log("Dog barks");
  }

}

const animal = new Animal();
animal.speak();    

const dog = new Dog();
dog.speak();    