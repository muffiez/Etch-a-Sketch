const DEFAULT_SIZE = 16;

const grid = document.getElementById('grid')
const gridSize = document.querySelector("#gridSize");
const input = document.querySelector("#sizeSlider");
const clearBtn = document.querySelector("#clear");
const eraseBtn = document.querySelector("#erase");


let currentColor = 'black'; 

const mouseOverEvent = (e) => {
    const cell = e.target;
    switch (currentColor) {
        case 'black':
            cell.style.backgroundColor = 'black';
            break;
        case 'erase':
            cell.style.backgroundColor = 'white';
            break;
        case 'rgb':
            const r = Math.floor(Math.random()*256);
            const g = Math.floor(Math.random()*256);
            const b = Math.floor(Math.random()*256);
            cell.style.backgroundColor = `rgb(${r},${g},${b})`;
            break;
        default:
            throw new Error("color does not exist");
    }
}

let setupGrid = (size) => {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    for(let i = 0; i < size*size; i++) {
        const cell = document.createElement("div");
        cell.className = "cells";
        grid.appendChild(cell);
        cell.addEventListener('mouseover', mouseOverEvent)
    }
}



let clearGrid = () => {
    grid.innerHTML = ''
}
let refresh = () => {
    clearGrid();
    setupGrid(size);
}

// const cells = document.querySelector("cells");
// clearBtn.addEventListener('click', refresh());


input.addEventListener("input", (e) => { 
    size = e.target.value;
    gridSize.innerHTML = `${size} x ${size}`;
    clearGrid();
    setupGrid(size);
});

 



const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const colorSelection = e.target.id;
        console.log(colorSelection);
        currentColor = colorSelection;
    });
});

window.onload = () => {
    setupGrid(DEFAULT_SIZE);
}


