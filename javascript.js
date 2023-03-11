for(let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.className = "boxes";
    document.getElementById("container").appendChild(div);
    div.addEventListener('mouseover', () => {
        div.classList.add('mouse-over');
        });
}



