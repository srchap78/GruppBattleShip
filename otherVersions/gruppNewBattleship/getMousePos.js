function getMousePos(canvas, event){
    //let canvas = document.querySelector("#canvas"); //why does this need to be here when it is declared in main.js
    let rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}