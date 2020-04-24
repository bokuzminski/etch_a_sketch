const container = document.querySelector("#grid-container");
let penDown = false;
let cell = [];
let baseCellCount = 16;
let resetButtton = document.querySelector("#clear");
let newButton = document.querySelector("#newGrid");


let slider = document.querySelector("#valueSlider");
let output = document.querySelector("#sliderValue");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
}

newButton.addEventListener('click', function () { createGrid(slider.value) });
resetButtton.addEventListener('click', function () { clear() });
container.addEventListener('click', function () { toggleDrawing() });


createGrid(baseCellCount);

function createGrid(gridSize) {
    deleteCells();
    let cellNumber = gridSize * gridSize;
    container.style.gridTemplateColumns = (`repeat(${gridSize}, 1fr`);
    container.style.gridTemplateRows = (`repeat(${gridSize}, 1fr`);
    for (let i = 0; i < cellNumber; i++) {
        cell[i] = document.createElement('div');
        cell[i].setAttribute("class", "cell");
        container.appendChild(cell[i]);
    }
}



function activatePen(e) {
    e.target.classList.add('active');
}

function toggleDrawing() {
    if (!penDown) {
        cell.forEach(item => {
            item.addEventListener('mouseleave', activatePen);
        })
        penDown = true;
    } else {
        cell.forEach(item => {
            item.removeEventListener('mouseleave', activatePen);
        })
        penDown = false;
    }

}

function clear() {
    cell.forEach(item => {
        item.classList.remove('active');
    })
}

function deleteCells() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}