// Array para controlar o estado de cada caixa
const estadoCaixas = {
    'caixa-interseccionalidade': false,
    'caixa-racismo': false,
    'caixa-etnico': false,
    'caixa-dados': false
};

// Função para alternar a exibição do conteúdo
function toggleConteudo(caixaId, textoId, animacaoClass) {
    const texto = document.getElementById(textoId);
    const isAberto = estadoCaixas[caixaId];

    if (!isAberto) {
        // Abrir: remove classes antigas e adiciona a nova animação
        texto.classList.remove('slide-from-left', 'slide-from-right');
        texto.style.display = 'block';
        
        // Pequeno delay para garantir que o display mude antes da animação
        setTimeout(() => {
            texto.classList.add(animacaoClass);
        }, 10);
        
        estadoCaixas[caixaId] = true;
    } else {
        // Fechar: remove a animação e esconde
        texto.classList.remove('slide-from-left', 'slide-from-right');
        texto.style.display = 'none';
        estadoCaixas[caixaId] = false;
    }
}

// Event listeners para cada caixa
document.getElementById('caixa-interseccionalidade').addEventListener('click', function() {
    toggleConteudo('caixa-interseccionalidade', 'texto-1', 'slide-from-box');
});

document.getElementById('caixa-racismo').addEventListener('click', function() {
    toggleConteudo('caixa-racismo', 'texto-2', 'slide-from-right');
});

document.getElementById('caixa-etnico').addEventListener('click', function() {
    toggleConteudo('caixa-etnico', 'texto-3', 'slide-from-box');
});

document.getElementById('caixa-dados').addEventListener('click', function() {
    toggleConteudo('caixa-dados', 'texto-4', 'slide-from-right');
});