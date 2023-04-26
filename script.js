let gridContainer = document.querySelector(".grid-container");

let button = document.createElement("button");
button.textContent = "Create New Grid";
document.body.insertBefore(button, gridContainer);

button.addEventListener("click", replaceCurrentGrid);

createGrid(16);


function changeColor(e) {
    e.target.style.backgroundColor = "red";
}

function createGrid(size) {
    for (let i = 0; i < size ** 2; i++) {
        let gridItem = document.createElement("div");

        gridItem.style.width = `${960 / size}px`;
        gridItem.style.height = `${960 / size}px`;

        gridContainer.appendChild(gridItem);

        gridItem.addEventListener("mouseenter", changeColor);
    }
    document.body.appendChild(gridContainer);
}

function replaceCurrentGrid() {

    let gridSize = prompt("Enter new grid size");

    if (((gridSize > 0)) && (gridSize < 100 || gridSize === 100)) {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
        createGrid(gridSize);
    }
    else {
        alert("Invalid Values. Try again.")
        replaceCurrentGrid();
    }
}