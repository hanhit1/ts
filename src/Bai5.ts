class Warehouse {
    _name: string;
    _storage: number;
    _address: string;
    owner: string;
    constructor(name: string, storage: number, address: string, owner: string) {
        this._name = name;
        this._storage = storage;
        this._address = address;
        this.owner = owner;
    }
    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    get storage() {
        return this._storage;
    }
    set storage(storage: number) {
        this._storage = storage;
    }
    get address() {
        return this._address;
    }
    set address(address: string) {
        this._address = address;
    }
}
const warehouse = new Warehouse('fullhouse', 100, 'Da Nang', 'Jack97');
console.log(warehouse.name);
console.log(warehouse.storage);
console.log(warehouse.address);
warehouse.name = 'warehouse';
console.log(warehouse.name);
warehouse.storage = 200;
console.log(warehouse.storage);
warehouse.address = 'Ha Noi';
console.log(warehouse.address);
