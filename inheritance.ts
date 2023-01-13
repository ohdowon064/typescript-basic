class Shape {
    private _name: string;
    public x: number = 0;
    public y: number = 0;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    draw() {
        console.log(`Drawing ${this._name} at (${this.x}, ${this.y})`);
    }
}

class Rectangle extends Shape {
    public width: number;
    public height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    draw() {
        console.log(`Drawing Rectangle ${this.width} * ${this.height} ${this.name} at (${this.x}, ${this.y})`);
    }

    isSquare(): boolean {
        return this.width == this.height;
    }
}

let rect = new Rectangle("MyRect", 100, 100);
rect.draw();
console.log(rect.isSquare());

abstract class Shape2 {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract draw();
}

class Circle extends Shape2 {
    public radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    draw() {
        console.log(`Drawing Circle ${this.radius} ${this.name}`);
    }
}

let circle = new Circle("MyCircle", 100);
circle.draw();

export {};