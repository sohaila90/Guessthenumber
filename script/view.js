const numberLow = 1;
const numberHigh = 20;
let score = 0;

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