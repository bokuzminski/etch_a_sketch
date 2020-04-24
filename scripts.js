const container = document.querySelector("#grid-container");

let cell = [];

createGrid(16);

function createGrid(gridSize) {
    let cellNumber = gridSize * gridSize;
    container.style.gridTemplateColumns = (`repeat(${gridSize}, 1fr`);
    container.style.gridTemplateRows = (`repeat(${gridSize}, 1fr`);
    for(let i=0; i < cellNumber; i++) {
        cell[i] = document.createElement('div');
        cell[i].setAttribute("class", "cell");
        container.appendChild(cell[i]);
    }
}