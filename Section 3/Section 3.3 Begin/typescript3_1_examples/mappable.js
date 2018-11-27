"use strict";
exports.__esModule = true;
function stringifyProps() {
    var obj = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        obj[_i] = arguments[_i];
    }
    var temp = {};
    for (var prop in obj) {
        temp[prop] = String(obj[prop]);
    }
    return temp;
}
var stringData = stringifyProps(100, true);
var firstElement = stringData[0];
var secondElement = stringData[1];
var len = stringData.length;
stringData.pop();
stringData.forEach(function (x) { return console.log(x); });
