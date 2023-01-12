// for, for..of, for..in
// for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for..of
let numbers = [10, 20, 30];
for (let number of numbers) {
    console.log(number);
}

// for..in
for (let index in numbers){
    console.log(numbers[index]);
}

// while, do..while
// while
let index: number = 1;
while (index <= 10) {
    console.log(index);
    ++index;
}

function getData(): null {
    return null;
}

let data: any;
do {
    data = getData();
    console.log(data)
} while(data != null);