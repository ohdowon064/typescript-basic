function displayNumbers(data: number[]): void {
  for (const elem of data) {
    console.log(elem);
  }
}

function displayStrings(data: string[]): void {
  for (const elem of data) {
    console.log(elem);
  }
}

function displayBooleans(data: boolean[]): void {
  for (const elem of data) {
    console.log(elem);
  }
}

function display<T>(data: T[]): void {
  console.log(data.length);
  for (const elem of data) {
    console.log(elem);
  }
}

display<number>([1, 2, 3]);

interface IExport<T> {
    export(): T;
}

class MyData<T> implements IExport<T> {
    private _data: T;

    constructor(data: T) {
        this._data = data;
    }
    
    export(): T {
        let cloned = (<any>Object).assign({}, this._data);
        return cloned;
    }
}

class Person {id: number; name: string;}
let p: Person = {id: 1, name: "Tim"};

let o = new MyData<Person>(p);
let cp: Person = o.export();
console.log(cp.name);


// Generic Type Contraint
class Human {
    name: string;
    email: string;
}

class Employee extends Human {
    dept: string;
    jobtitle: string;
}

class Mailer<T extends Human> {
    private sender = "sales@test.com";

    sendMail(receiver: T){
        console.log(`Send from ${this.sender} to ${receiver.email}`)
    }
}

let mailer = new Mailer();
let p2 = new Human();
p2.email = "tom@test.com";
mailer.sendMail(p2);

let emp = new Employee();
emp.email = "kim@hits.ai";
emp.dept = "developer";
mailer.sendMail(emp);

export {};
