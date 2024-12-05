// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for the final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// You can copy and paste this into your stables.js file, and then use it to guide you.
// Please do not create a new file!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop -------------------------//

// Initialize a variable called "horses" that will store the horses in your stable.
// Create a variable and use it to store a message visitors to the stable.
// Create a variable and use it to store the cost of a late payment fee.
// Create a variable and use it to store the number of available stalls in the stable.

let horses = [];
let lateFee = 100;
let availableStalls = 10;

//------------------------- First day -------------------------//

// Using a constructor, add at least 3 horses to your stables.
//
// The horse should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)
// - a method that introduces your horse and references at least 3 object properties.
// - a second, unique method of your choice

// Store the horses you've just created in your "horses" variable.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

function Horse(name, age, nickname, favoriteTreat, monthlyRent, isInside, color, isBathed, isHungry) {
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
    this.isHungry = isHungry;
    this.moveHorses = function () {
        if(this.isInside) {
            this.isInside = false;
        } else {
            this.isInside = true;
        }
    }
}



const horse1 = new Horse("Tic", 1, "Sneezy", "blueberry", 100, true, "pink", false, true);
const horse2 = new Horse("Tac", 2, "Grumpy", "raspberry", 200, false, "blue", true, false);
const horse3 = new Horse("Toe", 3, "Dopey", "strawberry", 300, true, "green", false, true);

horses.push(horse1);
horses.push(horse2);
horses.push(horse3);


let newHorse = {
    name: "Rudolf",
    age: 4,
    nickname: "Dancing",
    favoriteTreat: "blackberry",
    monthlyRent: 400,
    isInside: true,
    color: "red",
    isBathed: false,
    introduction() {
        console.log(`${this.nickname} ${this.name} has visited the stables!`);
    },
    isHungry: true,
};

horses.push(newHorse);
console.log(horses);


//function Person(name, age) {
// this.name = name,
// this.age = age,
// }
//const person1 = new Person('Alice', 25);
//console.log(person1.name);
//console.log(person1.age);

//------------------------- Stable roster -------------------------//

// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.

//function Horse(name, age, nickname, favoriteTreat, monthlyRent, isInside, color, isBathed, isHungry) {
//const horse1 = new Horse("Tic", 1, "Sneezy", "blueberry", 100, true, "yellow", false, true);
//const horse2 = new Horse("Tac", 2, "Grumpy", "raspberry", 200, false, "blue", true, false);
//const horse3 = new Horse("Toe", 3, "Dopey", "strawberry", 300, true, "green", false, true);
//let newHorse = {
//    name: "Rudolf",
//    age: 4,
//    nickname: "Dancing",
//    favoriteTreat: "blackberry",
//    monthlyRent: 400,
//    isInside: true,
//    color: "red",
//    isBathed: false,
//    introduction() {
//        console.log(`${this.nickname} ${this.name} has visited the stables!`);
//    },
//    isHungry: true,
//};


//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.

availableStalls = availableStalls - horses.length

// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"

if(availableStalls < 2) {
    console.log("We need to build more stalls.")
} else {
    console.log(`We have ${availableStalls} available!`)
}

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

function lateFeeCalculator(horse) {
    console.log(horse.monthlyRent + lateFee);
};

lateFeeCalculator(horses[0]);

// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.


for (let i = 0; i < horses.length; i++) {

    if (horses[i].favoriteTreat === "blueberry") {
        console.log(`${horses[i].name} likes the blueberry`);
        break;
    } else {
        console.log(`${horses[i].name} does not like blueberry`)
    }

}

// i = 0
// is i less than length of horses array?
// yes: 0 < 4
// execute console.log
// print horses[0].name
// i++, i = 1
// is i less than length of horses array?
// yes: 1 < 4
// execute console.log
// print horses[1].name
// ...
// print horses[3].name
// i++, i = 4;
// is i less than length of horses array?
// no: 4 = 4
// exit loop

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

function identifyNickname(horse) {
    return horse.nickname;
}

console.log(identifyNickname(horses[0]));

//------------------------- Day to day operations -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.

function showerChecker() {

    for (let i = 0; i < horses.length; i++) {
   
        if(horses[i].isBathed === true) {
            console.log(`${horses[i].name} is shiny!`);  
        } else {
            console.log(`${horses[i].name} is muddy. Let's give them a good scrub!`)
            horses[i].isBathed = true;
        }
    }
    
};

showerChecker();


// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.

//**Below was my 1st iteration to the instruction asking to bring horses outside**/
// function bringHorsesOutside() {
//     for (let i = 0; i < horses.length; i++) {

//       if (horses[i].isInside === true) {
//         horses[i].isInside = false;
//     }
    
// };

// console.log("All the horses are outside!");

// };

function moveHorses() {
        for (let i = 0; i < horses.length; i++) {
    
          if (horses[i].isInside === true) {
            horses[i].isInside = false;
        }
        
    };
    
    console.log("All the horses are outside!");

    for (let i = 0; i < horses.length; i++) {
        if(!horses[i].isInside) {
            horses[i].isInside = true;
            console.log(`${horses[i].name} was moved inside, because it's getting dark.`)
        }
    }
    
};


// bringHorsesOutside();

// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.


// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

for (let i = 0; i < horses.length; i++) {

    if(!horses[i].isInside) {
    horses[i].isInside = true;
    console.log(`${horses[i].name} has come inside.`);
    horses[i].isHungry = false;
    console.log(`${horses[i].name} just had ${horses[i].favoriteTreat}. They're not hungry anymore.`)
}
};

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

function bringHorsesInside() {

    for (let i = 0; i < horses.length; i++) {
        if(!horses[i].isInside) {
            horses[i].isInside = true;
            console.log(`${horses[i].name} was moved inside, because it's getting dark.`)
        }
    }
};

//------------------------- Bonus -------------------------//

// Replace the ascii art at the top of the file with art representing your stable.