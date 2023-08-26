let response = document.querySelector('#response');
        
function toClean() {
    response.innerHTML = "";
}

function toAdd(num) {
    response.innerHTML += num;
}

function operators(str) {
    response.innerHTML += str;
}

function calculate() {
    let input = response.innerHTML;
    try {
        let result = eval(input);
        response.innerHTML = result;
    } catch (error) {
        response.innerHTML = "Erro";
    }
}