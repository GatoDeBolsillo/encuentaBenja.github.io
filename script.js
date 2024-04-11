document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('encuestaForm');
    const contadorSi = document.getElementById('votosSi');
    const contadorNo = document.getElementById('votosNo');

    let votosSi = 0;
    let votosNo = 0;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const respuesta = document.querySelector('input[name="respuesta"]:checked').value;

        if (respuesta === 'Si') {
            votosSi++;
            contadorSi.textContent = votosSi;
        } else if (respuesta === 'No') {
            votosNo++;
            contadorNo.textContent = votosNo;
        }

        form.reset(); 
    });
});
