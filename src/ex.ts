export default function demo() {
    console.log('hehe');
}
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;
export interface Person {
    name: string;
    age: number;
    address: string;
}
export const type = 'TypeScript';
export class Hotel {
    hotel_id: number;
    name: string;
    address: string;
    description: string;

    constructor(hotel_id: number, name: string, address: string, description: string) {
        this.hotel_id = hotel_id;
        this.name = name;
        this.address = address;
        this.description = description;
    }

    static async findByPk(id: number): Promise<Hotel | null> {
        const mockDatabase = [
            new Hotel(1, 'Hotel One', '123 Main St', 'A nice place to stay'),
            new Hotel(2, 'Hotel Two', '456 Elm St', 'Another nice place to stay')
        ];

        return mockDatabase.find(hotel => hotel.hotel_id === id) || null;
    }
}
