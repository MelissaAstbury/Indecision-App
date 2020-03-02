"use strict";

//arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    return a + b;
};
console.log(add(55, 1));

// this keyword - no longer bound

var user = {
    name: "Melissa",
    cities: ["Manchester", "America", "Wales"],
    printPlacedLived: function printPlacedLived() {
        var _this = this;

        this.cities.forEach(function (city) {
            console.log(_this.name + " has lived in " + city);
        });
    }
};
user.printPlacedLived();

//Challenge

var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
