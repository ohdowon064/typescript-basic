export let count: number = 1;
export class Person {
    name: string;
}

export function showNextCount() {
    count++;
    console.log(count);
}

var seq = 0;

export default class Human {
    name: string;
}