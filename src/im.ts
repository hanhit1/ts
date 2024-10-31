import demo from './ex';
demo();
import { pi as π, squareTwo, phi } from './ex';
console.log(π);
import * as ex from './ex';
console.log(ex.pi);
import type { Person } from './ex';
const person: Person = {
    name: 'Jack',
    age: 32,
    address: 'Seoul'
};
console.log(person);
import type { type } from './ex';
console.log(type);

