
var count = 0;
const gridSize = 5;
let lightsState = Array.from({ length: gridSize * gridSize }, () => Math.random() > 0.5);

function initializeGame() {
    const gameContainer = document.getElementById('game-container');
    for (let i = 0; i < gridSize * gridSize; i++) {
        const light = document.createElement('div');
        light.classList.add('light');
        light.dataset.index = i;
        light.style.backgroundColor = lightsState[i] ? '#fff' : '#000';
        light.addEventListener('click', toggleLights);
        gameContainer.appendChild(light);
    }
}

function toggleLights() {
    const index = parseInt(this.dataset.index);
    incrementCounter();
    toggleState(index);
    updateLights();
    checkWin();
    count++;
}

function incrementCounter() {
    count++;
    document.getElementById('moves').innerHTML = count;

}

function toggleState(index) {
    lightsState[index] = !lightsState[index];

    const row = Math.floor(index / gridSize);
    const col = index % gridSize;

    if (row > 0) toggleSingleState(index - gridSize); // Toggle above
    if (row < gridSize - 1) toggleSingleState(index + gridSize); // Toggle below
    if (col > 0) toggleSingleState(index - 1); // Toggle left
    if (col < gridSize - 1) toggleSingleState(index + 1); // Toggle right
}

function toggleSingleState(index) {
    lightsState[index] = !lightsState[index];
}

function updateLights() {
    const lights = document.querySelectorAll('.light');
    lights.forEach((light, index) => {
        light.style.backgroundColor = lightsState[index] ? '#fff' : '#000';
    });
}

function checkWin() {
    if (lightsState.every(light => !light)) {
        alertBox("You won in " + count + " moves");
        resetGame();
    }
}

function resetGame() {
    lightsState = Array.from({ length: gridSize * gridSize }, () => Math.random() > 0.5);
    updateLights();
}

function alertBox(message) {
    var alertBox = document.getElementById('alert-box');
    var alertText = document.getElementById('alert-message');
    alertText.textContent = message;
    alertBox.style.display = 'block';
}

function closeAlert() {
    const alertBox = document.getElementById('alert-box');
    alertBox.style.display = 'none';
}

initializeGame();
