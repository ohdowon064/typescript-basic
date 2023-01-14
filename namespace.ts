namespace Helper{
    let counter: number = 0;

    function getNext(): number {
        return counter++;
    }

    class Converter{};
    export class ExportedConverter{}
    interface IClone{};
}

// let cvt = new Helper.Converter(); 네임스페이스 바깥에 못씀.
let cvt = new Helper.ExportedConverter();