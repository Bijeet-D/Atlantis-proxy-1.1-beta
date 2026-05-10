let mouseStartLoc = null;
/** @type {HTMLDivElement} */
let mouseStartEl = null;

let isDragging = false;


let mouseIsDown = false

window.addEventListener('mousedown', () => mouseIsDown = true);
window.addEventListener('mouseup', () => mouseIsDown = false);
window.addEventListener('blur', () => mouseIsDown = false); 



document.querySelectorAll(".tab").forEach(tab => {

    tab.addEventListener("click", (event) => {
        mouseStartLoc = event.clientX;
        console.log("mouse loc: ", mouseStartLoc);
        mouseStartEl = tab;
})





document.addEventListener("mousemove", (e) => {
  if (mouseStartLoc && mouseIsDown && (Math.abs(mouseStartLoc - e.clientX) > 10)) {
   // alert(1)
    isDragging = true;

    console.log("Dragging? ", isDragging)
  } else {
    isDragging = false;
  }
});

if (isDragging) {
    //mouseStartEl 
    console.log("WHYYYYYY. ", isDragging)
    let amt2move = mouseStartLoc - e.clientX;
    mouseStartEl.style.transform = `translateX(${amt2move})`
}

});




