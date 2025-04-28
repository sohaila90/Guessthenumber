let numberLow = 1;
let numberHigh = 20;
let score = 0;
let correctNumber;

updateView();
function updateView() {
    app.innerHTML = /*html*/ `
    <h1>Guess the Number</h1>
    <p ${numberLow}>Tipp tallet</p>
    <p ${numberHigh}></p>
    <input onchange="writeNumber(this.value)" type="number">
    <button onclick="istheNumberCorrect()">Sjekk</button>
    `;
}