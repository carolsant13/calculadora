function insert(num) {
    const resultado = document.getElementById('resultado');
    resultado.textContent += num; // Adiciona o número ao campo
    adjustTextSize(); // Ajusta o tamanho do texto conforme a quantidade de caracteres
}

function clean() {
    const resultado = document.getElementById('resultado');
    resultado.textContent = ''; // Limpa o campo
    adjustTextSize(); // Ajusta o tamanho do texto após limpeza
}

function back() {
    const resultado = document.getElementById('resultado');
    resultado.textContent = resultado.textContent.slice(0, -1); // Remove o último caractere
    adjustTextSize(); // Ajusta o tamanho do texto após remoção
}

function calcular() {
    const resultado = document.getElementById('resultado');
    try {
        // Avalia a expressão no campo e mostra o resultado
        resultado.textContent = eval(resultado.textContent);
    } catch (e) {
        resultado.textContent = 'Erro';
    }
    adjustTextSize(); // Ajusta o tamanho do texto após cálculo
}

function adjustTextSize() {
    const resultado = document.getElementById('resultado');
    let textLength = resultado.textContent.length;
    
    if (textLength > 15) {
        resultado.style.fontSize = '1.2rem'; // Reduz a fonte conforme a quantidade de texto
    } else if (textLength > 10) {
        resultado.style.fontSize = '1.5rem'; // Tamanho médio para textos um pouco maiores
    } else {
        resultado.style.fontSize = '2rem'; // Tamanho padrão
    }
}
