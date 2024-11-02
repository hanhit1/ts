function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}
function methodDecorator(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target)
    descriptor.value = function (x: string) {
        console.log(x + 5);
    }
    
}
function accessorDecorator(target: any, propertyKey: string, descriptor : PropertyDescriptor) {
    const originalGetter = descriptor.get;
    descriptor.get = function () {
        let value = originalGetter?.call(this);
        return value + 'vv';
    }
}
function propertyDecorator(target: any, propertyKey: string) {
    
    console.log(propertyKey);
}
function paramaterDecorator(target: any, propertyKey: string, parameterIndex: number) {
    
    console.log(`ParameterDecorator applied to ${propertyKey} at parameter ${parameterIndex}`);
    
}
@classDecorator
class TestClass{
    @propertyDecorator
    private _testProperty: string ='';
    constructor(x: string){
        this._testProperty = x;
    }
    @accessorDecorator
    get testProperty(): string {
        return this._testProperty;
    }
    @methodDecorator
    testMethod(@paramaterDecorator x: string): void { 
        console.log(x);
    }


}
const test = new TestClass("test");
//test.testMethod('hehe');
console.log(test.testProperty)

