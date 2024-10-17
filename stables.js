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
