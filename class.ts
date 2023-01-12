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