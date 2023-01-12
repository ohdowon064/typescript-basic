// interface
// 클래스/객체 구조를 표현하는 계약서
// interface는 js로 변환되지 않으며, 타입체크를 위한 것이다.

interface Order {
    id: number;
    product: string;
    deliver(address: string): boolean;
}

interface Person {
    name: string;
    age: number;
}

let jack: Person = {name: "Jack", age: 17};
// let ken: Person = {name: "Ken", age: 18, address: "Seoul"}; error

function checkMinor(customer: Person): void {
    if (customer.age < 18) {
        console.log(`${customer.name} is minor`);
    } else {
        console.log(`${customer.name} is adult`);
    }
}

checkMinor(jack);
let tom = {name: "Tom", age: 18, address: "Seoul"}; // Person 인터페이스 타입을 요구하는데, tom은 이 인터페이스에 정의된 2개의 속성을 가지고 있으므로 가능
checkMinor(tom);

interface ICalc {
    (a: number, b: number): number;
}

function Add(a: number, b: number): number {
    return a + b;
}

function Sub(a: number, b: number): number {
    return a - b;
}

let calc: ICalc = Add;
let c = calc(1, 2);
console.log(c);

calc = Sub;
c = calc(1, 2);
console.log(c);

function ship(address: string): boolean {
    console.log(`Shipping to ${address}...`);
    return true;
}

let ord: Order = {id: 1, product: "CD", deliver: ship};
ord.deliver("Seoul");

// 클래스 구현
class OrderImpl implements Order {
    id: number;
    product: string;
    memo: string; // 추가 속성

    constructor(id: number, product: string) {
        this.id = id;
        this.product = product;
    }

    deliver(address: string): boolean {
        console.log(`Delivering ${this.product} to ${address}...`);
        return true;
    }

    toString(): string {
        return `Order {id: ${this.id}, product: ${this.product}, memo: ${this.memo}}`;
    }
}

let order = new OrderImpl(1, "CD");
order.memo = "ASAP";
order.deliver("Seoul");
console.log(order);
console.log(order.toString());

export {};
