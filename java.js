//Create a webpage with a 16x16 grid of square divs
const container = document.querySelector(".container");

const newGridButton = document.createElement("button");
newGridButton.textContent = "Make New Grid";
container.appendChild(newGridButton);

newGridButton.addEventListener("click", newGrid);


function generateGrid(number) {

    const grid = document.createElement("div");
    grid.classList.add("grid")

    for (let col = 0; col < number; col++) {

        let colDiv = document.createElement("div");
        colDiv.classList.add("col");

        for (let i = 0; i < number; i++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            console.log("sqaure added");
            squareDiv.addEventListener("mouseenter", (e) => e.target.style.backgroundColor = "black");
            colDiv.appendChild(squareDiv);
        }
        //container.appendChild(colDiv);
        grid.appendChild(colDiv);

    }

    container.appendChild(grid);

}

generateGrid(16);

function newGrid() {

    let size = prompt("Enter Grid Dimension (Upper Limit of 100)", "");

    size = Number(size);
    if (size > 100) size = prompt("Enter Grid Dimension (Upper Limit of 100)", "");

    removeGrid();
    console.log("grid removed");
    generateGrid(size);
    console.log("grid added");

}

function removeGrid() {
    const grid = document.querySelector(".grid");

    container.removeChild(grid);
}

