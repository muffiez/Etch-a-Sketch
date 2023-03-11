const grid = document.getElementById('grid')

for(let i = 0; i < 256; i++) {
    const div = document.createElement("div");
        div.className = "boxes";
    grid.appendChild(div);
    div.addEventListener('mouseover', () => {
        div.classList.add('mouse-over');
        });
}

const gridSize = document.querySelector("#gridSize");
const input = document.querySelector("#sizeSlider");



input.addEventListener("input", (e) => { 
  let size = e.target.value;
  console.log(size)
  gridSize.innerHTML = `${size} x ${size}`;
  clearGrid();
  setupGrid(size);
  for(let i = 0; i < size*size; i++) {
    const div = document.createElement("div");
        div.className = "boxes";
    grid.appendChild(div);
    div.addEventListener('mouseover', () => {
        div.classList.add('mouse-over');
        });
  }
});



  function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  }  

  function clearGrid() {
    grid.innerHTML = ''
  }
  




