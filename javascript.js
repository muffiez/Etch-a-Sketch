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
            cell.style.backgroundColor = 'black'
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
        case 'choice':
            cell.style.backgroundColor = `${document.getElementById('colorpicker').value}`;
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
        cell.style.backgroundColor = 'white'
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

//resize slider 
input.addEventListener("input", (e) => { 
    size = e.target.value;
    gridSize.innerHTML = `${size} x ${size}`;
    clearGrid();
    setupGrid(size);
    checkGridStatus();
});

const clearBoard = () => {
    const cell = document.getElementsByClassName("cells");
    for(let i = 0; i < cell.length; i++) {
        cell[i].style.backgroundColor = 'white';
    }
}

let colorPicked = document.getElementById('colorpicker');
colorPicked.addEventListener('input', () => {
    currentColor = 'choice';
    removeHighlight();
    addHighlight(currentColor);
});



let checkGridStatus = () => {
    const cell = document.getElementsByClassName("cells");
        if(gridLines.checked) {
            for (let i = 0; i < cell.length; i++) {
                cell[i].setAttribute('style', 'border-width: 1px; border-style: solid; border-color: black; background-color: white;');
        }
    }
    else {
        for (let i = 0; i < cell.length; i++) {
            cell[i].removeAttribute('style', 'border-width: 1px; border-style: solid; border-color: black;');
            cell[i].style.backgroundColor = 'white';
        }
    }
}

let gridLines = document.getElementById('gridLine');
gridLines.addEventListener('input', checkGridStatus);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonId = e.target.id;
        removeHighlight();
        addHighlight(buttonId);
        if(buttonId == 'clear') {
            clearBoard();
        }
        else {
            currentColor = buttonId;
        }
    });
});

const addHighlight = (buttonId) => {
    document.getElementById(`${buttonId}`).setAttribute('style', 'border-width: 5px; border-color: #D4AF37; border-style: outset;');
}

const removeHighlight = () => {
    document.getElementById('black').removeAttribute('style');
    document.getElementById('rgb').removeAttribute('style');
    document.getElementById('erase').removeAttribute('style');
    document.getElementById('clear').removeAttribute('style');
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE);
}
