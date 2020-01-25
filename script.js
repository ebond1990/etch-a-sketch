function drawgrid(cols,rows){
    cellSize = canvasSize/rows + "px";
    for (i=1; i < (cols * rows) + 1; i++){
        cell = document.createElement('div');
        cell.id = i;
        cell.className = 'cell';
        cell.style.height = cellSize
        cell.style.width = cellSize;
        container.appendChild(cell);
        cell.addEventListener("mouseenter",fillCell);
    }
}

function fillCell(e){
    e.target.classList.add("filled-cell")
}

function reset(){
    const cells = Array.from(document.querySelectorAll(".cell"));
    cells.forEach(cell => cell.remove());
    rows = prompt("Enter a number");
    while(isNaN(rows)){
        rows = prompt("Enter a number");
    }
    
    drawgrid(rows,rows);
}

const container = document.querySelector(".container");

const btn = document.querySelector("#reset");
btn.addEventListener("click",reset);

const canvasSize = 600;
let rows = 16; 
let cols = rows;
let cellSize = canvasSize/rows + "px";
let cell;
const flexbox = document.getElementsByClassName

drawgrid(16,16);
