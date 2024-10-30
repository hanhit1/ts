class User {
    static count = 0;
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        User.count++;
    }
    static display(): void {
        console.log(`Total users: ${User.count}`);
    }
}
const user1 = new User('Jack97', 32);
const user2 = new User('Thien An', 25);
console.log(User.count);
User.display();