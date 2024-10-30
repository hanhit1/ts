interface User {
    
    name: string;
    age: number;
    address: string;
    email: string;
    phone : string;
}
interface Admin extends User {
    readonly id: number;
    gender?: string;
}
class Person implements Admin {
    id = 1;
    name = 'Jack';
    age = 32;
    address = 'Seoul';
    email = '';
    phone = '';
}
console.log(new Person);
