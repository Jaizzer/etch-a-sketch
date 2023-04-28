// Select the grid container element
let gridContainer = document.querySelector(".grid");

// Create a button element and set its text content
let button = document.createElement("button");
button.textContent = "Create New Grid";

// Add the button to the document before the grid container
document.body.insertBefore(button, gridContainer);

// Add an event listener to the button that replaces the current grid when clicked
button.addEventListener("click", replaceCurrentGrid);

// Create a grid with a default size of 16 squares
createGrid(16);

// Change the color of a square when the mouse pointer hovers over it
function changeColor(e) {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;    
}

// Create a grid with the specified size and add it to the grid container
function createGrid(size) {
    for (let i = 0; i < size ** 2; i++) {
        let gridItem = document.createElement("div");
        
        // Set the width and height of each square based on the grid size
        gridItem.style.width = `${parseFloat(window.getComputedStyle(gridContainer).getPropertyValue("width")) / size}px`;
        gridItem.style.height = `${parseFloat(window.getComputedStyle(gridContainer).getPropertyValue("height")) / size}px`;

        // Add the square to the grid container and add an event listener to change its color on mouseenter
        gridContainer.appendChild(gridItem);
        gridItem.addEventListener("mouseenter", changeColor);
    }

    // Add the grid container to the document
    document.body.appendChild(gridContainer);
}

// Replace the current grid with a new grid of the specified size
function replaceCurrentGrid() {
    let gridSize = prompt("Enter new grid size");

    // Check that the grid size is valid and create a new grid with the specified size
    if (((gridSize > 0)) && (gridSize < 100 || gridSize === 100)) {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
        createGrid(gridSize);
    }
    // If the grid size is invalid, alert the user and prompt for a new size
    else {
        alert("Invalid Values. Try again.")
        replaceCurrentGrid();
    }
}