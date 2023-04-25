let gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

for (let i = 0; i < 16**2; i++) {
    let gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridContainer.appendChild(gridItem);

    gridItem.addEventListener("mouseenter", changeColor);
}

document.body.appendChild(gridContainer);

let button = document.createElement("button");
button.textContent = "Create New Grid";
document.body.insertBefore(button, gridContainer);

function changeColor(e) {
    e.target.style.backgroundColor = "red";
}