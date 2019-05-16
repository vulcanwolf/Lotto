//Random Number Generator

function randomNumber(upper) {
	return Math.floor( Math.random() * upper ) +1;
}

//Variables to store info

//Gives the function a value to work with
var upper = 11111;

//Tracks number of guesses computer makes
var attempts = 0;

//Used to store guess and compare with initial value
var guess;

//Stores random generated number and used to compare it with second guess
var number = randomNumber(upper);

//While loop

	while ( guess !== number) {
		attempts +=1;
		guess = randomNumber(upper);
	}

document.write("The random number was " + number);
document.write(" It took " + attempts + " times to guess it right");
