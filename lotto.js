
//Random Number Generator

function randomNumber(upper) {
	return Math.floor( Math.random() * upper ) +1;
}
var upper = 70;
var counter = 0;
var guess;

/*var guess2 = randomNumber(upper);
var guess3 = randomNumber(upper);
var guess4 = randomNumber(upper);
var guess5 = randomNumber(upper);
var guess6 = randomNumber(upper);*/

/*document.write("The lotto numbers are: " + guess1 + " " + guess2 + " " + guess3 + " " + guess4 + " " +guess5 );
document.write(" ->POWERBALL:" + " " + guess6);*/

/*Lets write this out using less code!*/

/*While loop*/

/*while(counter < 7){
	guess = randomNumber(upper);
	document.write(guess + " ");
	counter += 1;
}*/

/*document.write("The lotto numbers are: " + guess1 + " " + guess2 + " " + guess3 + " " + guess4 + " " +guess5 );
document.write(" ->POWERBALL:" + " " + guess6);*/


/*Do while loop*/

/*
do{
	guess = randomNumber(upper);
	document.write(guess + " ");
	counter += 1;
}while(counter < 7);
*/

/*For loop*/

for(counter; counter < 7; counter +=1){
	document.write(guess = randomNumber(upper) + " ");
}
