var totalWon = 0;
var totalLost = 0;

for (var i = 1; i <= 10; i++) {
    var guessNum = parseInt(prompt("Enter Number from 1 to 10 : "));
    // document.write(guessNum);
    var randomNum = Math.floor(Math.random() * 10 + 1);
    // document.write(randomNum);
    if (guessNum === randomNum) {
        // document.write("You have won");
        totalWon++;
    }
    else {
        // document.write("You have lost. Random num was " + randomNum);
        totalLost++;
    };
};
document.write("You have won " + totalWon + " times <br>");
document.write("You have lost " + totalLost + " times");