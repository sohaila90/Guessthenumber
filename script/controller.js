function randomNumberCheck() {
    return Math.floor(Math.random() *numberHigh +1);
}
// parameter eksisterer kun her
function writeNumber(newNumber) {
    correctNumber = newNumber;
}

function istheNumberCorrect() {
    let number = randomNumberCheck();
     if(number == correctNumber) {
     score++;
     message = "Riktig!";
     }else {
       message = "Feil!";
     }
     updateView();
}