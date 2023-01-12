function sayHello(firstName: string, lastName: string): void {
    let name = `${firstName} ${lastName}`;
    console.log(`Hello, ${name}`);
}

sayHello("Tom", "Jerry");

// optional parameter
function sayHelloWithOptional(firstName: string, lastName?: string): void {
    let name = lastName ? `${firstName} ${lastName}` : firstName;
    console.log(`Hello, ${name}`);
}

sayHelloWithOptional("Tom");

// default parameter
function sayHelloWithDefault(firstName: string, lastName: string = "Smith"): void {
    let name = `${firstName} ${lastName}`;
    console.log(`Hello, ${name}`);
}

sayHelloWithDefault("Tom");

// rest parameter
// ...을 붙인다.
function sayHelloWithRest(firstName: string, ...restOfName: string[]): void {
    let name = `${firstName} ${restOfName.join("-")}`;
    console.log(`Hello, ${name}`);
}

sayHelloWithRest("Tom", "Jerry", "Smith");