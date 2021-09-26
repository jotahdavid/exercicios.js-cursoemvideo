const box = document.getElementById('box');
const button = document.getElementsByTagName('input')[0];
let c = 0; /*clicks*/

// Functions =============================================
function resetBox() {
    box.innerText = "Passe o mouse";
    box.style.backgroundColor = ""; /*back to original bg color*/
}

// Mouse Events ==========================================
box.addEventListener("mouseenter", () => {
    box.style.transition = "background-color 0.2s linear";
    if (c == 0) {   
        box.innerText = "Clique em mim";
        // box.firstElementChild.innerText = "Clique em mim";
        box.style.backgroundColor = "#0000b4";
    }
})

box.addEventListener("mouseout", () => {
    if (c == 0) {
        resetBox();
    }
})

// Clicks Counter ========================================
box.addEventListener("click", () => {
    c++;
    box.innerText = `Clicou ${c}x`;
    box.style.backgroundColor = "#d40000";
    button.style.display = "inline-block";
})

// Reset Counter =========================================
button.addEventListener("click", () => {
    c = 0;
    resetBox();
    button.style.display = ""; /*back to original display*/
})

// =======================================================
/* 
// pega todos os elementos de mesmo tipo (tag ou class)
let elementsHTML = document.querySelectorAll();

function modifyText(x) {
    x.innerText = "Hello, world!";
}

// para cada elemento de mesmo tipo, executa a função
elementsHTML.forEach(modifyText);
*/