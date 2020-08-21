const squaresContainer = document.querySelector("#squares-container");

const eraserControl = document.querySelector("#eraser-control");

let gridSize;

let elSize;

let pixelColor = "black";

function drawPixel() {
    this.style.backgroundColor = pixelColor;
}

function drawGrid() {

    for (let i = 0, numSquares = gridSize * gridSize; i < numSquares; i++) {

        const el = document.createElement("div");

        el.classList.toggle("square");

        el.style.height = `${elSize}px`;
        el.style.width = `${elSize}px`;

        el.addEventListener("mouseenter", drawPixel);

        squaresContainer.appendChild(el);
    }

}

function reset() {
    while (squaresContainer.firstChild) {
        squaresContainer.removeChild(squaresContainer.lastElementChild);
    }

    eraserControl.checked = false;
    pixelColor = "black";

    gridSize = prompt("Enter grid size (1-240):");

    elSize = 720 / gridSize;

    validateInput(gridSize) ? drawGrid() : reset();
}

function validateInput(inputString) {
    const re = /[^0-9]/;

    if (inputString === "0") {
        alert("Please enter a positive integer.")
        return false;
    }

    if (re.test(inputString)) {
        alert("Please enter a positive integer.")
        return false;
    } else {
        if (inputString > 240) {
            alert("Please enter integer smaller than 240.");
            return false;
        }
        return true;
    }
}

function toggleEraser() {
    eraserControl.checked ? pixelColor = "white" : pixelColor = "black";
}
