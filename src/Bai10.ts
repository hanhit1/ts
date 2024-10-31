function f1() {
    console.log('f1');
}
const f2 = () => {
    console.log('f2');
};
function calculate(a: number, b: number): number;
function calculate(a: string, b: string): string;
function calculate(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}
console.log(calculate(1, 2));
console.log(calculate('1', '2'));