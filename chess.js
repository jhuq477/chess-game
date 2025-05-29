//
//-------- CONSTANTS --------
//

const BOARD_SIZE = 8;

const gameState = {
    selected: null,
    turn: "white"
}

const START_POS = [
    /* 0 1 2 3 4 5 6 7 */
    ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
    ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
    ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"]
];

const PIECE_MAP = { K: "king", Q: "queen", B: "bishop", N: "knight", R: "rook", P: "pawn"};

//
//-------- HELPERS (no state) --------
//

// check if the move would stay on the board 
function isOnBoard(r, c) {
    return r >= 0 && r < BOARD_SIZE && c >= 0 && c < BOARD_SIZE;
};

function makePiece(code) {
    if (!code) return null;
    const colour = code[0] === "w" ? "white" : "black";
    return { piece: PIECE_MAP[code[1]], colour, hasMoved: false};
}

//
//-------- MODEL --------
// 

const board = START_POS.map(row => row.map(makePiece));

function pieceAt(r,c) {
// TO DO
};

function movePiece(from, to) {
    // TODO
};

//
//-------- DOM --------
//
const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");


//
//-------- RENDERING --------
//
function clearBoard() {
    boardEl.innerHTML = "";
}

function createSquare(r, c) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    if ((r + c) % 2 === 0) {
        newSquare.classList.add("light");
    } else {
        newSquare.classList.add("dark");
    };

    newSquare.dataset.row = r;
    newSquare.dataset.col = c;

    return newSquare;
};

function drawBoard() {
    clearBoard();
    for (let r = 0; r < BOARD_SIZE; r++) {
        for (let c = 0; c < BOARD_SIZE; c++) {
            boardEl.appendChild(createSquare(r,c));
        };
    };
};

//
//-------- CONTROLLER --------
//

function handleSquareClick() {
    //TODO
};

function setStatus(text) {
    statusEl.textContent = text;
};


//-------- INITIALISATION --------
drawBoard();
setStatus("White to move");

