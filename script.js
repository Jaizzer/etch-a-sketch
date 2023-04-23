let gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

for (let i = 0; i < 16**2; i++) {
    let square = document.createElement("div");
    square.className = "square";
    gridContainer.appendChild(square);
}

document.body.appendChild(gridContainer);