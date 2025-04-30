updateView();
function updateView() {
    app.innerHTML = /*html*/ `
    <h1>Guess the Number</h1>
    <p>Gjett et tall mellom ${numberLow} og ${numberHigh}</p>
    <input onchange="writeNumber(this.value)" type="number">
    <button onclick="istheNumberCorrect()">Sjekk</button>
    <h3>score: ${score}</h3>
    <b>${message}</b>
    `;
}