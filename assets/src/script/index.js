//seleciona a tag p que tem uma div response
let response = document.querySelector('#response');

//essa função adiciona um numeros     
function toAdd(num) {
    response.innerHTML += num;
}

//essa função limpa tudo
function toClean() {
    response.innerHTML = "";
}

//ela adiciona os operadores matematicos
function operators(str) {
    response.innerHTML += str;
}

//essa função calcula tudo
function calculate() {
    let input = response.innerHTML;

    if (input.includes('%')) {
        let parts = input.split('%');
        if (parts.length === 2) {
            let value = parseFloat(parts[0]);
            let percent = parseFloat(parts[1]);
            if (!isNaN(value) && !isNaN(percent)) {
                let result = (value * percent) / 100;
                response.innerHTML = result;
            }
        }
    response.innerHTML = "Erro";
    }
    try { 
        let result = eval(input); //a função eval ela faz com que o html seja tratado como js
        response.innerHTML = result;
    } catch (error) {
        response.innerHTML = "Erro";
    }   
}