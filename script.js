
const container = document.querySelector(".container");

//generate a grid of variable size. 
let gridSize
function allTheDivs(inContainer, numOfRows) {
    if (numOfRows <= 100 && numOfRows >=1) {
        for (i = 1; i <= numOfRows; i++) {
            const row = document.createElement(`div`)
            inContainer.appendChild(row)
            row.setAttribute(`class`, `rows`)
            for (j = 1; j <= numOfRows; j++) {
                const pixel = document.createElement(`div`)
                pixel.setAttribute("class", `pixels`)
                row.appendChild(pixel)
                pixel.addEventListener("mouseenter", () => addOpacity(pixel))
                pixel.addEventListener("mouseenter", () => randomRGB(pixel))
            }
        }
        gridSize = numOfRows
    } else {
        alert("You have not entered a valid grid size.")
    }

};


//all possible RGB values
function random1to255() {
    let randomNum = Math.floor(Math.random() * 255 + 1)
    return randomNum
}

//when attached to event listener, will cause each pixel to change to a random color
//when hovered over
function randomRGB(colored) {
    let red = random1to255()
    let green = random1to255()
    let blue = random1to255()
    colored.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

//opacity should reach 100% after ten passes
function addOpacity(hovered) {
    let opacity = Number(hovered.style.opacity)
    opacity = opacity + .1
    hovered.style.opacity = `${opacity}`
}


//default grid size is 4x4
allTheDivs(container, 4)

//when size of new grid is given, previously generated grid should be removed
//and replaced with new grid.

function removeOldGrid(previousGrid) {
    const oldRow = document.querySelectorAll(`.rows`)
    for (k=0; k<previousGrid; k++) {
        container.removeChild(oldRow[k])
    }
}

const inputBox = document.querySelector(".inputBox")
let newGridSize

function newGrid() {
    newGridSize = inputBox.value
    removeOldGrid(gridSize)
    allTheDivs(container, newGridSize)

}

const generatorBtn = document.querySelector(".generatorBtn")
generatorBtn.addEventListener("click", () => newGrid())





