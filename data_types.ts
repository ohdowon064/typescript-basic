// any: 모든 타입 가능
let unknown: any = 1;
unknown = true;
unknown = "hello";

let s = unknown.substring(1, 4);
console.log(s);

// object: Non-primitive 타입
// primitive types: string, number, boolean, bigint, symbol, null, undefined
// object != Object
// object: 데이터 타입으로서 object
// Object: interface 타입으로 모든 javascript 객체의 공통 인터페이스를 가리킨다.
declare function create(o: object): void;

// create({id: 1}); ok
// create("Tom"); error
// create(123); error

// void: 어떤 타입도 없는 것을 의미, 리턴값이 없을 경우 void를 사용
// 이 변수에는 undefinded, null만 할당 가능
function log(msg: string): void {
    console.log(msg);
}

let noReturn: void = log("error");
console.log(noReturn);

// never: 함수의 리턴타입으로 사용되며, 항상 예외나 무한루프로 절대 리턴하지 않는 경우 사용된다.
// function error(msg: string): never {
//     throw new Error(msg);
// }

// error("error");

// union: 여러 타입 중 하나의 타입을 의미
function add(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return a.toString() + b.toString();
}

let result: number | string = add(1, 2);
console.log(result);
result = add("1", "2");
console.log(result);

// type alias
type AddParam = number | string;
function add2(a: AddParam, b: AddParam): AddParam {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return a.toString() + b.toString();
}

type AddFunc = (a: number, b: number) => number;
type TreeNode<T> = {
    data: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
};

let root: TreeNode<number> = {
    data: 1,
    left: null,
    right: null,
};

type Confirm = "Yes" | "No" | "Cancel";

export {};