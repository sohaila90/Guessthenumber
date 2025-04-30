function randomNumberCheck() {
    return Math.floor(Math.random() *numberHigh +1);
}
// parameter eksisterer kun her
function writeNumber(newNumber) {
    // vi har laget dette parametere fordi vi ikke vet hvilket 
    // nr som vil bli skrevet inn
    correctNumber = newNumber;
}

function istheNumberCorrect() {
    let number = randomNumberCheck();
    // if sjekker minst 2 ting om de er riktige
    // kjører kun hvis de er like
     if(number == correctNumber) {
     score++;
     message = "Riktig!";
     }else {
       message = "Feil!";
     }
     updateView();
}