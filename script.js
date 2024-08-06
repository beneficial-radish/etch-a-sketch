
const container = document.querySelector(".container");
let gridSize = 4
let newGridSize = 0


//all possible RGB values
function random1to255() {
    let randomNum = Math.floor(Math.random() * 255 + 1)
    return randomNum
}

//when attached to event listener, will cause each pixel to change to a random color
//when hovered over
function randomRGB(colored) {
red = random1to255()
green = random1to255()
blue = random1to255()
colored.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

//opacity should reach 100% after ten passes
function addOpacity(hovered) {
    opacity = Number(hovered.style.opacity)
    opacity = opacity + .1
    hovered.style.opacity = `${opacity}`
}


//generate a grid of variable size

function allTheDivs(inContainer, numOfRows) {
    if (numOfRows <= 100 && numOfRows >=1) {
        for (i = 1; i <= numOfRows; i++) {
            const row = document.createElement(`div`)
            inContainer.appendChild(row)
            row.style.maxHeight = "100%"
            row.style.maxWidth = "100%"
            row.style.flex = "1 1 0"
            row.style.display = "flex"
            row.style.flexDirection = "column"
            row.style.padding = "0"
            row.style.margin = "0"
            row.setAttribute(`class`, `row${i}`)
            for (j = 1; j <= numOfRows; j++) {
                const pixel = document.createElement(`div`)
                pixel.setAttribute("class", `pixel${j}`)
                console.log(pixel)
                row.appendChild(pixel)
                pixel.style.maxWidth = "100%"
                pixel.style.maxHeight = "100%"
                pixel.style.flex = "1 1 0"
                pixel.style.backgroundColor = "black"
                pixel.style.margin = "0"
                pixel.style.opacity = "0"
                pixel.addEventListener("mouseenter", () => addOpacity(pixel))
                pixel.addEventListener("mouseenter", () => randomRGB(pixel))
            }
        }
        gridSize = numOfRows
    } else {
        alert("You have not entered a valid grid size.")
    }

};


//default grid size is 4x4
allTheDivs(container, 4)


//when size of grid is selected, previously generated grid should be removed
//and replaced with new grid.

const generatorBtn = document.querySelector(".generatorBtn")
const inputBox = document.querySelector(".inputBox")

function removeOldGrid(previousGrid) {
    for (k=1; k<=previousGrid; k++) {
        const oldRow = document.querySelector(`.row${k}`)
        container.removeChild(oldRow)
    }
}

function newGrid() {
    newGridSize = inputBox.value
    removeOldGrid(gridSize)
    allTheDivs(container, newGridSize)

}

generatorBtn.addEventListener("click", () => newGrid())





