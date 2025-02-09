const container = document.querySelector(".container");

function generateGrid(number) {

    const grid = document.createElement("div");
    grid.classList.add("grid")

    for (let col = 0; col < number; col++) {

        let colDiv = document.createElement("div");
        colDiv.classList.add("col");

        for (let i = 0; i < number; i++) {
            let squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            squareDiv.addEventListener("mouseenter", (e) => {
                colorIn(e.target);
            });
            colDiv.appendChild(squareDiv);
        }
        grid.appendChild(colDiv);

    }
    container.insertBefore(grid, container.children[0]);
}

function colorIn(square) {

    if (mode === "shade") {
        if (square.style.backgroundColor == "") {
            square.style.backgroundColor = "black";
            square.style.opacity = "0.1";
        }
        else {
            square.style.backgroundColor = "black";
            let increasedOpacity = Number(square.style.opacity) + 0.1;
            square.style.opacity = `${increasedOpacity}`;
        };

    }

    else {
        if (square.style.backgroundColor == "" || square.style.backgroundColor == "black") {
            if (square.style.backgroundColor == "") {
                square.style.opacity = "0.1"
            }
            else {
                let increasedOpacity = Number(square.style.opacity) + 0.1;
            };

            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            square.style.backgroundColor = randomColor;
        }
        else {
            let increasedOpacity = Number(square.style.opacity) + 0.1;
            square.style.opacity = `${increasedOpacity}`;
        };
    }
}

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

function clearGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "";
    });
}

//default grid size
generateGrid(16);

//default is shading mode
let mode = "shade";



const buttonDiv = document.createElement("div")

const newGridButton = document.createElement("button");
newGridButton.textContent = "Make New Grid";

buttonDiv.appendChild(newGridButton);
newGridButton.addEventListener("click", newGrid);

const colorModeButton = document.createElement("button");
colorModeButton.textContent = "Coloring";

buttonDiv.appendChild(colorModeButton);

const shadeModeButton = document.createElement("button");
shadeModeButton.textContent = "Shading";
shadeModeButton.classList.add("on");
buttonDiv.appendChild(shadeModeButton);

shadeModeButton.addEventListener("click", (e) => {
    mode = "shade";
    e.target.classList.add("on");
    colorModeButton.classList.remove("on");
})

colorModeButton.addEventListener("click", (e) => {
    mode = "color";
    e.target.classList.add("on");
    shadeModeButton.classList.remove("on");
})
buttonDiv.style.display = "flex";
container.appendChild(buttonDiv);

const clearButton = document.createElement("button");
clearButton.textContent = "Clear Grid";
clearButton.addEventListener("click", clearGrid);
buttonDiv.appendChild(clearButton);
