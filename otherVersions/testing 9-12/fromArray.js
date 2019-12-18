function fromArray(board) {
    for (x = 0; x < board.length; x++) {
        for (y = 0; y < board[x].length; y++) {
            if (board[y][x] === "B" || board[y][x] === "C") {
                c.fillStyle = 'red';
                c.fillRect(x * 50, y * 50, 50, 50)

            }
        }
    }
}


