
//Random Number Generator

function randomNumber(upper) {
	return Math.floor( Math.random() * upper ) +1;
}
var upper = 70;
var guess1 = randomNumber(upper) ;
var guess2 = randomNumber(upper);
var guess3 = randomNumber(upper);
var guess4 = randomNumber(upper);
var guess5 = randomNumber(upper);
var guess6 = randomNumber(upper);

document.write("The lotto numbers are: " + guess1 + " " + guess2 + " " + guess3 + " " + guess4 + " " +guess5 );
document.write(" ->POWERBALL:" + " " + guess6);