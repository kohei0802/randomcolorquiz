//all color buttons
const colorBtn = document.querySelectorAll('.button');
/*querySelector only selects the first matching element*/

//pop up window after users' color selection
const pop = document.querySelector('#reaction');
const closeBtn = document.querySelector('#reaction button');
const reply = document.querySelector('#reaction p');

//pop up window before the game starts
const pop1 = document.querySelector('#gamestart');
const startBtn = document.querySelector('#gamestart button');

//display window (1st div). Here, its background attribute is modified
const screen = document.querySelector('.display');

//random number provides random index to access the list
var query = ['yellow', 'blue', 'red', 'green'];
function generateRandNum() {
    return Math.floor(Math.random() * 4 + 0);
    //maximum value should be set to 4.
    //because Math.random() only generates natural numbers *LESS THAN* 1
}

function check(s) {
    //document.getElementById("output").innerHTML = "You chose yellow <button>OK</button>";
    //s is string
    if (screen.style.background == s) {
        reply.innerHTML = "Correct";
    }
    else {
        reply.innerHTML = "Wrong";
    }

}

// function handler(s) {
//     //s == yellow or blue or red or green
//     check(s);
// }

// for (let i = 0; i < 4; i++) {
//     colorBtn[i].addEventListener('click', handler(query[i]));
// }

colorBtn[0].onclick = function () {
    check('yellow');
    pop.setAttribute('class', 'popup');
}

colorBtn[1].onclick = function () {
    check('blue');
    pop.setAttribute('class', 'popup');
}

colorBtn[2].onclick = function () {
    check('red');
    pop.setAttribute('class', 'popup');
}

colorBtn[3].onclick = function () {
    check('green');
    pop.setAttribute('class', 'popup');
}


closeBtn.onclick = function () {
    pop.setAttribute('class', 'popdown');
    screen.style.background = query[generateRandNum()];
}

startBtn.onclick = function () {
    pop1.setAttribute('class', 'popdown');
    screen.style.background = query[generateRandNum()];
}