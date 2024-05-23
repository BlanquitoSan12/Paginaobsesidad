document.addEventListener('DOMContentLoaded', () => {
    console.log('El documento está completamente cargado y analizado');

    const form = document.getElementById('imc-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value) / 100; // Convertir cm a m

        if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
            const imc = peso / (altura * altura);
            const resultado = document.getElementById('resultado-imc');
            resultado.textContent = `Tu IMC es ${imc.toFixed(2)}.`;

            if (imc < 18.5) {
                resultado.textContent += ' Estás por debajo del peso normal.';
            } else if (imc >= 18.5 && imc < 24.9) {
                resultado.textContent += ' Tienes un peso normal.';
            } else if (imc >= 25 && imc < 29.9) {
                resultado.textContent += ' Estás en sobrepeso.';
            } else {
                resultado.textContent += ' Estás en obesidad.';
            }
        } else {
            alert('Por favor, ingresa valores válidos para peso y altura.');
        }
    });
});
