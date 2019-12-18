function handleClick(event){
    let pos = getMousePos(canvas, event);
    posx= pos.x;
    posy= pos.y;
    alert(`X:${posx} Y:${posy}`);
}