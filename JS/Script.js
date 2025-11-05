let clicado = false;    
const texto = document.querySelector("#texto-1");
const botao = document.querySelector("#caixa-interseccionalidade");

botao.addEventListener("click", function() {
    if (!clicado) {
        texto.style.display = "block";
        clicado = true;
    } else {
        texto.style.display = "none";
        clicado = false;
    }
})