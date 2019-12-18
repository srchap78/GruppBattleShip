function handleClick(event) {
    

    let pos = getMousePos(canvas, event);
    //this is the x and y coords on the canvas
    posx = pos.x;
    posy = pos.y;
    alert(`X:${posx} Y:${posy}`);
}