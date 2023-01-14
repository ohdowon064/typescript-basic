var Helper;
(function (Helper) {
    var counter = 0;
    function getNext() {
        return counter++;
    }
    var Converter = /** @class */ (function () {
        function Converter() {
        }
        return Converter;
    }());
    ;
    var ExportedConverter = /** @class */ (function () {
        function ExportedConverter() {
        }
        return ExportedConverter;
    }());
    Helper.ExportedConverter = ExportedConverter;
    ;
})(Helper || (Helper = {}));
// let cvt = new Helper.Converter(); 네임스페이스 바깥에 못씀.
var cvt = new Helper.ExportedConverter();
/// <reference path="namespace.ts" />
var cv = new Helper.ExportedConverter();
