function insert(num) {
    const resultado = document.getElementById('resultado');
    resultado.textContent += num; // Adiciona o número ao campo
    adjustTextSize(); // Ajusta o tamanho do texto conforme a quantidade de caracteres
}

function clean() {
    const resultado = document.getElementById('resultado');
    resultado.textContent = ''; 
    adjustTextSize(); 
}
function back() {
    const resultado = document.getElementById('resultado');
    resultado.textContent = resultado.textContent.slice(0, -1); 
    adjustTextSize(); 
}

function calcular() {
    const resultado = document.getElementById('resultado');
    try {
        
        resultado.textContent = eval(resultado.textContent);
    } catch (e) {
        resultado.textContent = 'Erro';
    }
    adjustTextSize(); 
}

function adjustTextSize() {
    const resultado = document.getElementById('resultado');
    let textLength = resultado.textContent.length;
    
    if (textLength > 15) {
        resultado.style.fontSize = '1.2rem'; 
    } else if (textLength > 10) {
        resultado.style.fontSize = '1.5rem'; 
    } else {
        resultado.style.fontSize = '2rem'; 
    }
}
