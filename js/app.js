'use strict';
var name = prompt("what's your name?");
console.log(name)
alert(`hello & welcome to the website ${name} wish you a joy visit`);
var mark = 0

var know = prompt("do you know me personally?").toLowerCase();
console.log(know);
if (know === 'yes' || know === 'y') {
    mark = mark + 1;
    // console.log (know);
    alert('your answer is right');
} else if (know === 'no' || know === 'n') {
    // console.log (know);
    alert('your answer is right');
} else {
    alert('try again with yes or no');

}

var know2 = prompt("do you think i love sport?").toLowerCase();
console.log(know2);
if (know2 === 'yes' || know2 === 'y') {
    mark= mark+1;
    // console.log (know2);
    alert('bingo, im addicted to sport');
} else if (know2 === 'no' || know2 === 'n') {
    // console.log (know2);
    alert('Oops!, im addicted to sport');
} else {
    alert('try again with yes or no');
}

var know3 = prompt("I love my speciality?").toLowerCase();
console.log(know3);
if (know3 === 'yes' || know3 === 'y') {
    mark= mark + 1;
    // console.log (know3);
    alert('your answer is right');
} else if (know3 === 'no' || know3 === 'n') {
    // console.log (know3);
    alert('wrong, i do love my speciality');
} else {
    alert('try again with yes or no');
}

var know4 = prompt("am i a tea person?").toLowerCase();
console.log(know4);
if (know4 === 'yes' || know4 === 'y') {
    mark= mark + 1;
    // console.log (know4);
    alert('no im a coffee person');
} else if (know4 === 'no' || know4 === 'n') {
    // console.log (know4);
    alert('your answer is right');
} else {
    alert('try again with yes or no');
}

var know5 = prompt("i like daisy?").toLowerCase();
console.log(know5);
if (know5 === 'yes' || know5 === 'y') {
    mark= mark + 1;
    // console.log (know5);
    alert('your answer is right');
} else if (know5 === 'no' || know5 === 'n') {
    // console.log (know5);
    alert('you are wrong, im in love with daisy');
} else {
    alert('try again with yes or no');
}

alert(`thank you for your time, 
            i hope that you had a good time ${name}`);

for (var trial = 0; trial < 4; trial++) {

    var know6 = prompt("try to guess my age!");
    console.log(know6);
    if (know6 == 23) {
        mark= mark + 1;
        alert('you are right');
        break;
    }
    else if (know6 < 23) {
        alert('your answer is too low');
    }
    else if (know6 > 23) {
        alert('your answer is too high');
    }

}
if (trial === 4) {
    alert('i am 23 years old');
}


var flowersILove = ['daisy', 'rose', 'jasmine', 'sunflower']
for (var i = 0; i < 6; i++) {
    console.log(flowersILove[i]);

    var userAnswer = prompt('one of the flowers i love is?')
    console.log(userAnswer);
    if (userAnswer === 'daisy' || userAnswer === 'rose' || userAnswer === 'jasmine' || userAnswer === 'sunflower') {
        mark= mark + 1;
        alert('you are right');
        break;
    }
    else if (userAnswer !== 'daisy'|| userAnswer !== 'rose' || userAnswer !== 'jasmine' || userAnswer !== 'sunflower') {
        alert ('try again');
    }
}
if (i === 6) {
    alert ('flowers I Love are: daisy, rose, jasmine and sunflower');
}

alert (`your total score is: ${mark}`);