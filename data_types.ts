// number
let a: number = 10;
let b: number = 3.14;
let c: number = 0xff;
let d: number = 0b1101;

// string
let seq: number = 1;
let s: string = `Current number is ${seq}
Next number is ${seq + 1}`;
console.log(s);

// boolean
let ok: boolean = true;
if (ok) {
  console.log("OK");
}

// null, undefined
// undefined: 변수가 정의되었지만 어떤 값도 할당되지 않음
// null: 아무것도 없음
let x;
console.log(x);
let y = null;
console.log(y);


// bigint: 2^52 - 1
// postfix n을 붙여 bigint를 표현한다.
let i: bigint = 1234560123123456789n;
console.log(i);

// symbol
// Symbol() 생성자를 사용하여 symbol을 생성한다.
// 변경불가능한 유니크값을 갖는다. 객체의 키나 클래스 멤버를 만들 때 사용
let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1 === sym2); // false

let sym3 = Symbol("key");
let sym4 = Symbol("key");
console.log(sym3 === sym4); // false

const symId = Symbol();
let obj = {
    [symId]: 12345
}
console.log(obj[symId]); // 12345