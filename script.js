let gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

for (let i = 0; i < 16**2; i++) {
    let gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridContainer.appendChild(gridItem);
}

document.body.appendChild(gridContainer);

function changeColor(e) {
    e.target.style.backgroundColor = "red";
}