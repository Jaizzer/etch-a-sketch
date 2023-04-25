let gridContainer = document.querySelector(".grid-container");

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

createGrid(16);

let button = document.createElement("button");
button.textContent = "Create New Grid";
document.body.insertBefore(button, gridContainer);

function changeColor(e) {
    e.target.style.backgroundColor = "red";
}