function horseOne(name, age, nickname, favoriteTreat, monthlyRent, isInside, color, isBathed, introduction) {
    this.name = name;
    this.age = age;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.monthlyRent = monthlyRent;
    this.isInside = isInside;
    this.color = color;
    this.isBathed = isBathed;
    this.introduction = function () {
        console.log(`${this.nickname} ${this.name} is ${this.age} years old!`);
    };
}

function Horse(name, age, nickname, favoriteTreat, monthlyRent, isInside, color, isBathed, introduction) {
    this.name = name;
    this.age = age;
    this.nickname = nickname;
    this.favoriteTreat = favoriteTreat;
    this.monthlyRent = monthlyRent;
    this.isInside = isInside;
    this.color = color;
    this.isBathed = isBathed;
    this.introduction = function () {
        console.log(`${this.nickname} ${this.name} is ${this.age} years old!`);
    };
}

const horse1 = new Horse("Charlie", 3, "happy", "carrot", 500, true, "yellow", true);
console.log(horse1.name);
console.log(horse1.age);


//function Person(name, age) {
// this.name = name,
// this.age = age,
// }
//const person1 = new Person('Alice', 25);
//console.log(person1.name);
//console.log(person1.age);

