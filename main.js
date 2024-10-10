/**
 * 2.4 - Custom Functions
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * This is a playground. Feel free to play.
 **/ 


// Example custom function using Number() and prompt()
function circle_area() {

    let radius = Number(prompt("What is the radius of the circle?"));

    console.log(`The area is: ${Math.PI * radius**2}`);

}

/*****  Your code goes below  *****/

// TASK PART 1
function to_fahrenheit() {

    let celsius = +prompt("what is the heat in celius");
    let fahrenheit = 0;
    fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}° celsius is equal to ${fahrenheit}° fahrenheit`);
}

// TASK PART 2

function to_celsius() {

    let fahrenheit = +prompt("what is the heat in fahrenheit");
    let celsius = 0;
    celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}° fahrenheit is equal to ${celsius}° celsius`);
}

// TASK PART 3

function roll_d10() {

    console.log(Math.ceil(Math.random() * 10));
}

// TASK PART 4

function roll_d6() {

    console.log(Math.ceil(Math.random() * 6));
}

// TASK PART 5

let cookies = 0

let upgrades = 1

let upgrade_cost = upgrades * 10 **2

function upgrading () {
    if (cookies > upgrade_cost) {
        
        upgrades = upgrades + 1;
        cookies = cookies - upgrade_cost;
        console.log(`you know earn ${upgrades} cookies per click`);
        upgrade_cost = (upgrades * 10) **2
        document.getElementById("amountofcookies").innerHTML = `cookies = ${cookies} `;
        document.getElementById("upgrade_button").innerHTML = `cost per upgrade: ${upgrade_cost}`;
    }   else { 

        console.log(`you do not have enough cookies for this upgrade`);
    }
}
function cookie_game() {
    console.clear()
    cookies = cookies + 1 * upgrades; 
    document.getElementById("amountofcookies").innerHTML = `cookies = ${cookies} `;
    document.getElementById("upgrade_button").innerHTML = `cost per upgrade: ${upgrade_cost}`;
    upgrade_cost = (upgrades * 10) **2
}

function guessinggame() {

    game = true

    let mystery_number = Math.ceil(Math.random() *10);

    while (game) {

        let user_guess = +prompt(`guess a random number from 1 to 10`);

        if (user_guess > mystery_number) {
            console.log(`the random number is lower`);

        }   else if (user_guess < mystery_number) {
            console.log(`the random number is higher`)


        }   else if (user_guess = mystery_number) {
            console.log(`Correct the random number was ${mystery_number}`)
            game = false
        }


    }
}



