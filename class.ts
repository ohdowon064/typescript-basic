class Shape {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    draw(x: number, y: number) {
        console.log(`Drawing ${this.name} at (${x}, ${y})`);
    }
}

let s1 = new Shape("MyCircle");
s1.draw(10, 20); 

// 접근제한자(Access Modifier)
// public, private, protected
// default: public

class Pattern {
    private name: string;
    public x: number = 0;
    public y: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    draw() {
        console.log(`Drawing ${this.name} at (${this.x}, ${this.y})`);
    }
}

let s2= new Pattern("MyCircle");
s2.x = 100;
s2.y = 200;
s2.draw();


class Employee {
    readonly id: number;
    dept: string;
    private _age: number;

    constructor(empId: number, dept: string) {
        this.id = empId;
        this.dept = dept;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value < 0) {
            throw new Error("Invalid age");
        }
        this._age = value;
    }

    readonly empType: string = "FTE";
}

let emp = new Employee(100, "IT");
emp.age = 30;
console.log(emp.age);

class Exam {
    static Cutline: number = 80;

    scoreCheck(score: number) {
        if (score >= Exam.Cutline) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }
    }
}

let exam: Exam;
exam = new Exam();
console.log("cutline: " + Exam.Cutline);

exam.scoreCheck(90);