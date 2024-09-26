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












