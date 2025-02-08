//Create a webpage with a 16x16 grid of square divs
const container = document.querySelector(".container");

const newGridButton = document.createElement("button");
newGridButton.textContent = "Make New Grid";
container.appendChild(newGridButton);

newGridButton.addEventListener("click", () => alert("new Grid called"));

const grid = document.createElement("div");
grid.classList.add("grid")

function generateGrid(number) {

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



