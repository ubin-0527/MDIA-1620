


function tinder(name, score) {
    let action;

    if(score === 10) {
        action = "swipe right"
    } else if(score === 7) {
        action = "at least send a message"
    } else {
        action = "swipe left"
    }

    console.log(`For ${name}, I will ${action}`);
}

tinder(Jack, 10);
tinder(Samantha, 5)