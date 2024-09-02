// Selectors
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const cellContainer = document.querySelector("#cellContainer");

// Create a 20x20 grid (400 cells)
const gridSize = 20;
const cells = [];
cellContainer.innerHTML = ""; // Clear any existing cells
for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("cellIndex", i);
    cellContainer.appendChild(cell);
    cells.push(cell);
}

// Initialize options array with empty strings
let options = new Array(gridSize * gridSize).fill("");

// Game variables
let currentPlayer = "X";
let running = false;

// Initialize the game
initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if (options[cellIndex] !== "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}

// Function to check for a winner with 5 consecutive symbols
function checkWinner() {
    let roundWon = false;

    // Check horizontal, vertical, and diagonal conditions
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize - 4; j++) {
            // Horizontal Check
            if (options[i * gridSize + j] !== "" &&
                options[i * gridSize + j] === options[i * gridSize + j + 1] &&
                options[i * gridSize + j] === options[i * gridSize + j + 2] &&
                options[i * gridSize + j] === options[i * gridSize + j + 3] &&
                options[i * gridSize + j] === options[i * gridSize + j + 4]) {
                roundWon = true;
            }

            // Vertical Check
            if (options[j * gridSize + i] !== "" &&
                options[j * gridSize + i] === options[(j + 1) * gridSize + i] &&
                options[j * gridSize + i] === options[(j + 2) * gridSize + i] &&
                options[j * gridSize + i] === options[(j + 3) * gridSize + i] &&
                options[j * gridSize + i] === options[(j + 4) * gridSize + i]) {
                roundWon = true;
            }
        }
    }

    // Check diagonal conditions
    for (let i = 0; i < gridSize - 4; i++) {
        for (let j = 0; j < gridSize - 4; j++) {
            // Diagonal down-right (\)
            if (options[i * gridSize + j] !== "" &&
                options[i * gridSize + j] === options[(i + 1) * gridSize + j + 1] &&
                options[i * gridSize + j] === options[(i + 2) * gridSize + j + 2] &&
                options[i * gridSize + j] === options[(i + 3) * gridSize + j + 3] &&
                options[i * gridSize + j] === options[(i + 4) * gridSize + j + 4]) {
                roundWon = true;
            }
            // Diagonal down-left (/)
            if (options[(i + 4) * gridSize + j] !== "" &&
                options[(i + 4) * gridSize + j] === options[(i + 3) * gridSize + j + 1] &&
                options[(i + 4) * gridSize + j] === options[(i + 2) * gridSize + j + 2] &&
                options[(i + 4) * gridSize + j] === options[(i + 1) * gridSize + j + 3] &&
                options[(i + 4) * gridSize + j] === options[i * gridSize + j + 4]) {
                roundWon = true;
            }
        }
    }

    if (roundWon) {
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    } else if (!options.includes("")) {
        statusText.textContent = `Draw!`;
        running = false;
    } else {
        changePlayer();
    }
}

function restartGame() {
    currentPlayer = "X";
    options = new Array(gridSize * gridSize).fill("");
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
