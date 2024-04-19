const horas = document.getElementById('horas'); 
const minutos = document.getElementById('minutos'); 
const segundos = document.getElementById('segundos'); 
const relogio = setInterval(function time() {
    let dateToday = new Date();
    let horinhas = dateToday.getHours();
    let minutinhos = dateToday.getMinutes();
    let segundinhos = dateToday.getSeconds();

    if(horinhas < 10) horinhas = 0 + horinhas;
    if(minutinhos < 10) minutinhos = 0 + minutinhos;
    if(segundinhos < 10) segundinhos = 0 + segundinhos;

    horas.textContent = horinhas;
    minutos.textContent = minutinhos;
    segundos.textContent = segundinhos;
    
})




