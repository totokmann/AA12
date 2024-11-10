let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll(".cell");
const statusDisplay = document.getElementById("status");
const resetButton = document.getElementById("resetButton");

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute("data-index");

    if (board[index] !== "" || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner()) {
        statusDisplay.textContent = `Jugador ${currentPlayer} ha ganado!`;
        gameActive = false;
    } else if (!board.includes("")) {
        statusDisplay.textContent = "Es un empate!";
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusDisplay.textContent = `Turno del jugador ${currentPlayer}`;
    }
}

function checkWinner() {
    return winningConditions.some(condition => {
        return condition.every(index => board[index] === currentPlayer);
    });
}

function resetGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    statusDisplay.textContent = `Turno del jugador ${currentPlayer}`;
    cells.forEach(cell => (cell.textContent = ""));
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", resetGame);

statusDisplay.textContent = `Turno del jugador ${currentPlayer}`;
