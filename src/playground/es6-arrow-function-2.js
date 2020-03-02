//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    return a + b;
}
console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: "Melissa",
    cities: ["Manchester", "America", "Wales"],
    printPlacedLived() {
        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city);
        });
    }
};
user.printPlacedLived();

//Challenge

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());