// named function
function say() {
    console.log("Hello World");
}

// arrow function
// setInterval(() => {() => {console.log("Hello");}}, 1000);

// anonymous function
let squareFunc = function(n: number) {
    return n * n;
}

// arrow function
let add = function(a, b) {return a + b};

let addFn = (a, b) => a + b;
console.log(addFn(1, 2));

class Person {
    name: string;
    age: number;
    print = () => console.log(`${this.name}, ${this.age}`);
}

let p = new Person();
p.name = "Tom";
p.age = 10;
p.print();

// arrow 함수는 함수 내부에서 외부 변수를 사용하면 외부 변수를 캡쳐하여 자신의 함수 안에 포함한다.
// 외부 변수의 상태를 arrow 함수 내부에서 계속 사용할 수 있도록 해당 컨텍스트를 가진다.

class CounterClassWithAnonymousFunction {
    count: number = 0;
    increase = function(): Function {
        return function() {
            this.count++;
            return this.count;
        }
    }
}

let c1 = new CounterClassWithAnonymousFunction();
let counter = c1.increase();
let n = counter();

console.log(typeof n, n); // NaN
// js에서 this는 함수 실행 시점에 전달되는데, top 레벨 함수의 this는 windown(전역객체)이다.
// window는 count 프로퍼티를 가지고 있지 않으므로 NaN이 된다.


class CounterClassWithArrowFunction {
    count: number = 0;
    increase = function() {
        return () => {
            this.count++;
            return this.count;
        }
    }
}

let c2 = new CounterClassWithArrowFunction();
let counter2 = c2.increase();
let n2 = counter2();
console.log(n2);
// arrow 함수로 수정하면 count 속성을 캡쳐하게 되어 this.count를 실행 컨텍스트에서 가진다.