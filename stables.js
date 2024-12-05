console.log("horse are great")

let horseName = "Coolguy"; // this is a comment or a note
console.log(horseName);
horseName = "Shazam"
let horseAge = 5;
console.log(horseName);
console.log(horseName);
console.log(horseName);
console.log(horseAge);
let isHorseInStable = true;
console.log(isHorseInStable);
isHorseInStable = false;
horseName = "Coolhorse";

console.log(typeof "42");

console.log(typeof horseName);

console.log(typeof "true");

console.log(typeof 234234);
console.log(typeof "23");
console.log(typeof false);

console.log(typeof horseAge);

const STABLE_MONTHLY_FEE = 100;
console.log(STABLE_MONTHLY_FEE);

console.log(STABLE_MONTHLY_FEE - horseAge);

console.log(STABLE_MONTHLY_FEE * 3);

let horseAgeIn10Years = horseAge + 10;
let horseAgeIn20Years = horseAgeIn10Years + 10;

console.log(horseAgeIn20Years);
let horseIntroduction = " is the name of my horse and it's nickname is ";

// let rentIntroduction = " it costs " + STABLE_MONTHLY_FEE + " to board " + horseName;
// let stableIntroduction = "Welcome to " + horseName + "'s stable";
let rentIntroduction = `It costs ${STABLE_MONTHLY_FEE} to board ${horseName}`;
let stableIntroduction = `Welcome to "${horseName}'s" stable`;
console.log(horseName + horseIntroduction);
console.log(rentIntroduction);
console.log(stableIntroduction);
console.log(rentIntroduction);

let horseNickname = "Happy";
horseName = "Potato";
console.log(horseNickname);
console.log(horseName);
console.log(horseName + horseIntroduction + horseNickname + ". He's a " + horseNickname + horseName);

console.log("If you sign up for a 3-months stay, you can save " + ((STABLE_MONTHLY_FEE*3)*0.10) + " dollars.");

//lesson 5//

if (true) {
    console.log ("this is getting outbut because the expression above evaled true");
}

// Lesson 6 CODE
let word = "Gaga";
console.log(word.charAt(2));

//Lesson from last week(you missed it)
let horseOneName = "Potato";
let horseTwoName = "Gaga";
let horseThreeName = "Thor";
console.log(horseOneName);
console.log(horseTwoName);
console.log(horseThreeName);

//Horse = ["name", age, isInside, "nickname"]
let horseOne = [horseName, horseAge, isHorseInStable, horseNickname];
let horseTwo = ["Gaga", 2, false, "Lady", 234234254];
console.log(horseOne);
horseOne.push("blue");
console.log(horseOne[0] + "'s nickname is " + horseOne[3]);
console.log(horseOne.length);
console.log(horseTwo.length);
console.log(`${horseTwo[0]}'s nickname is ${horseTwo[3]}`);
console.log(horseOne[1] + horseTwo[1]);

if (horseOne[1] === 3) {
    console.log(horseOne[0] + " is 3");
}

console.log(horseOne[0] + " and " + horseTwo[0] + " are staying at the stables");

let horseNames = [horseOneName, horseTwoName, horseThreeName];
let horseAges = [horseAge, 5, 2];
let horseNicknames = [horseNickname, "Lady", "Mighty"];
let areHorsesInStable = [isHorseInStable, false, true];

let horseIntro = `There are ${horseNames.length} horses staying at my stables: ${horseNames [0]}, ${horseNames [1]}, ${horseNames [2]}!`;
console.log(horseIntro);
//THIS IS THE EASIEST WAY TO STORE DATA

let isHorseTwoInStables = true;
let isHorseThreeInStables = false;
console.log(isHorseTwoInStables);
console.log(isHorseThreeInStables);



//Lab Today(due. Sunday)
// Stables.js
// - Output an introduction to the horses(already did that)
// - Output whether your horses are inside or outside At Least 3 horses!!!
//Readme
// - 3 confusing things
// - 3 things you have a solid understanding of
// (optional)Analogies that you use to think about things (ex.gif)t45
//Midterm is going to be about your stables. Open cheatsheets. some multiple questions.


//Lesson-5 Code
if (true) {
    console.log(":) this is getting output because the expression above evaled true")
};
if (3 < 4) {
    console.log("this is also true")
};
if (3 > 4) {
    console.log("this is false, so it won't show up")
};
if (0) {
    console.log("this won't run because 0=false")
};
if (1) {
    console.log("this will run, because any number greater than 0 is true boolean")
};
if (isHorseInStable) {
    console.log("this will probably run, but I don't remember what I did with ishorseinstable")
};
//turns out, my horse is not in stable, so I'll fix it now

isHorseInStable = true;

if (isHorseInStable) {
    console.log("this should run now, because I just edited my previous statement")
};

if (isHorseInStable === true) {
    console.log (`${horseName} is inside`)
};

if (isHorseInStable === true) {
    console.log (`${horseName} is inside`)
} else {
    console.log (`${horseName} is outside`)
}; //this would run if I set isHorseInStable = false, node stables.js would tell me that Potato is outside

//below is chain statement
if (horseAge === 8) {
    console.log ("My horse is old")
} else if (horseAge < 3 ) {
    console.log ("My horse is a baby")
} else {
    console.log("My horse is a kid")
};
//because the first two statements are false, the last else statement only stands
// Relation operators:
// === : equal to, !== : not equal to, >= : greater than or equal to
//Comparison Operators example
let balesOfHay = 5;
if (balesOfHay < 10) {
    console.log("Order more hay, Potato is getting hungry!")
} else {
    console.log("There is enough hay to feed Potato")
}; // node stables.js will say: "Order more hay, Potato is getting hungry!"

if (horseName !== "Potato") {
    console.log (`${horseName} has come to visit the stables!`)
} else {
    console.log (horseName + " is lonely")
};

//logical operators: 
// && : "AND", all conditions must be true
// || : "OR", one or more conditions must be true
// ! : "Negation", runs if the condition is false (can substitute === false)
if (!isHorseInStable) {
    console.log (`${horseName} is outside`)
} else {
    console.log (`${horseName + " is inside"}`)
}

//Lab 5a
if (2 < 1) {
    console.log (`${horseName} is inside the stable. He is alive and well.`)
} else if(horseAge = 5) {
    console.log (`${horseName} is outside. He is chasing after the neighbor kid.`)
} else {
    console.log (`${horseName} + "is neither inside nor outside, because half of his body is peeking out the window.`)
}

// Lesson-7


let joinedNames = horseNames.join();
console.log("My horses are named " + joinedNames);
// My horses are named Potato, Gaga, Thor

console.log(horseAges);

// Resusability
let names = ["Charlie", "Strawberry", "Beans"];
let ages = [5, 2, 10];

function logHorseAge(horse) {
    console.log(names[horse] + " is " + ages[horse] + "!");
}

logHorseAge(0);
logHorseAge(2); 
logHorseAge(1);

function logHorseNicknames(index) {
    console.log(horseNames[index] + "'s nickname is " + horseNicknames[index]);
}

//logHorseNicknames(1);
//logHorseNicknames(2);

function logHorseNicknames(horse, friend) {
    const string = `${horseNames[horse]}'s nickname is ${horseNicknames[horse]}, and they have a friend named ${horseNames[friend]}, who is nicknamed ${horseNicknames[friend]}!`;
    console.log(string);
}

logHorseNicknames(1, 2);

// " " - strings;
// ` ` (backticks) - template literals;
// [ ] - arrays ONLY;
// const arr = [1,2,3];
// arr[0] = 1;
// ( ) (parentheses) - function parameters, conditional statements;
// { } - functino bodies, conditional bodies, used with ${} for template literal insertion;

//function payMe(rent = STABLE_MONTHLY_FEE, demand) {
//    console.log(`Pay me $${rent}! ${demand}!`)
//}

//payMe(200, "right now, or else");
//payMe(undefined, "Pretty please");

//function payMe(rent, discount) {
//    if (discount) {
//        let amount = rent - discount
//    } else {
//        let amount = rent;
//    }
//}
//console.log(payMe(100, 45));
//undefined!

function payMe(rent, discount) {
    if (discount) {
        return rent - discount;
    } else {
        return rent;
    }
}
console.log(payMe(100,45));
//55
//works this time because of return statement

function tidyLocation(horse) {
    if(areHorsesInStable[horse]) {
        return " is inside.";
    }

    return " is outside."
}
console.log(horseNames[0] + tidyLocation(0));
//Potato is outside.

//Lesson-10
let blue = {
    name: "Blue",
    age: 3,
    nickname: "Pretty",
    introduction: function() { //this is still a method
        console.log(`This is ${this.name}! Their nickname is ${this.nickname}!`);
    },
};
console.log(blue.introduction()); //you have to add () because its function
console.log(blue.nickname);


function introduction(horse) {
    console.log(`This is ${horse.name}! Their nickname is ${horse.nickname}`)
}

blue.favoriteSnack = "Raspberries";
blue.STABLE_MONTHLY_FEE = 125;
blue.rentNotice = function() {
    console.log(`${this.name}'s monthly rent of $${this.STABLE_MONTHLY_FEE} is due`);
};

console.log(blue.rentNotice());
console.log(blue.name + " 's monthly rent is " + blue.STABLE_MONTHLY_FEE);

//constructor
function Horse(name, nickname, faveSnack, monthlyRent, isInside, age, color) {
    this.name = name;
    this.nickname = nickname; 
    this.faveSnack = faveSnack;
    this.STABLE_MONTHLY_FEE = monthlyRent;
    this.isInside = isInside;
    this.age = age;
    this.color = color;
    this.introduction = function() {
        console.log(`This is ${this.name}. their nickname is ${this.nickname}!`);
    }
    this.rentNotice = function (daysUntilDue) {
        console.log(`&{this.name}'s rent is due in ${daysUntilDue}, and is $${STABLE_MONTHLY_FEE}! Please pay promptly!`);
    }
}

let blue = new Horse("Blue", "Pretty", "Blueberries", 125, true, 3, blue);
let Potato = new Horse("Potato", "Happy", "Strawberry", 125, true, 3, brown);

console.log(blue);