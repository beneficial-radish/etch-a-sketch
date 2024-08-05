
const container = document.querySelector(".container");



function allTheDivs(inContainer, numOfRows) {
    if(numOfRows <=100) {
        for (i=1; i<=numOfRows; i++) {
            const row = document.createElement(`div`)
            inContainer.appendChild(row)
            row.style.maxHeight = "100%"
            row.style.maxWidth = "100%"
            row.style.flex = "1 1 0"
            row.style.display = "flex"
            row.style.flexDirection = "column"
            row.style.padding = "0"
            row.style.margin = "0"
                for(j=1; j<=numOfRows; j++) {
                    const pixel = document.createElement(`div`)
                    pixel.setAttribute("class", "pixel")
                    row.appendChild(pixel)
                    pixel.style.maxWidth= "100%"
                    pixel.style.maxHeight = "100%"
                    pixel.style.flex = "1 1 0"
                    pixel.style.backgroundColor = "pink"
                    pixel.style.margin = "0"
                    pixel.style.opacity = "50%"
                }
        }
    } else {
        alert("You have not entered a valid grid size.")
    }

};



allTheDivs(container, 4)









