enum Margin {
  Top, // default 0
  Right,
  Bottom,
  Left,
}

enum Padding {
  Top = 1,
  Right,
  Bottom,
  Left,
}

enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

let s: string = Color[1];
console.log(s);

enum FileAccess {
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write
}

enum ShapeKind {
    Circle = "CIRCLE",
    Square = "SQUARE",
    Triangle = "TRIANGLE"
}

export {};