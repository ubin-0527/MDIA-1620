//function that takes two params
//output some stuff, already have my notes somewhere else

function passwordCheck(password, input) {
    let outputMessage;

    if(password === input) {
        output message = "Access Granted!"

        if(input === "forgot" || input === "reset") {
            outputMessage += " This password should not be used because it glitches the system!"
        }
    } else {
        outputMessage = "Access Denied!"

        if(input === "forgot") {
            outputMessage = outputMessage + " Here is a hint";
        }

        if(input === "reset") {
            outputMessage += " Here is a link to reset"
        }

    }
    
    if(input.length < 5) {
        outputMessage += " Your password is too short";

    }
    
    console.log(outputMessage);
}

passwordCheck("input", "output");