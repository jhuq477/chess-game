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

function makePiece(code) {
    if (!code) return null;
    const colour = code[0] === "w" ? "white" : "black";
    const pieceMap = { K: "king", Q: "queen", B: "bishop", N: "knight", R: "rook", P: "pawn"};
    return { piece: pieceMap[code[1]], colour, hasmoved: false}
}

const board = START_POS.map(row = row.map(makePiece))

// check if the move would stay on the board 
function isOnBoard(r, c) {
    return r >= 0 && r < 8 && c >= 0 && c < 8;
}