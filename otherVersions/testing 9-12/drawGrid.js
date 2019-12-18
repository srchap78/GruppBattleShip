function drawGrid() {
    for (i = 0; i < canvas.width; i = 50 + i) {
        c.moveTo(i, 0);
        c.lineTo(i, canvas.width);
        c.strokeStyle='white';
        c.stroke();
        c.fillRect(i, 0, 50, 50);
        c.fillStyle='blue';
        
        for (j = 0; j < canvas.width; j = 50 + j) {
            c.moveTo(0, j);
            c.lineTo(canvas.width, j);
            c.stroke();
            c.fillRect(i, j, 50, 50);
        }
    }
    /* for (j = 0; j < canvas.width; j = 50 + j) {
        c.moveTo(0, j);
        c.lineTo(canvas.width, j);
        c.stroke();
        c.fillRect(0, j, 50, 50);
    } */
}

function drawLineGrid (){
    for (i = 0; i < canvas.width; i = 50 + i) {
        c.moveTo(i, 0);
        c.lineTo(i, canvas.width);
        c.strokeStyle='black';
        c.stroke();
        //c.fillRect(i, 0, 50, 50);
        //c.fillStyle='blue';
        
        for (j = 0; j < canvas.width; j = 50 + j) {
            c.moveTo(0, j);
            c.lineTo(canvas.width, j);
            c.stroke();
            //c.fillRect(i, j, 50, 50);
        }
    }
    /* for (j = 0; j < canvas.width; j = 50 + j) {
        c.moveTo(0, j);
        c.lineTo(canvas.width, j);
        c.stroke();
        c.fillRect(0, j, 50, 50);
    } */
}