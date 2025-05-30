function main(){
    var a=parseInt(document.getElementById("A").value);
    var b=parseInt(document.getElementById("B").value);
    // Chamada das funções
    soma(a,b);
    mult(a,b);
    potAB(a,b);
    raizB(b);
    porcAB(a,b);
    subAB(a,b);
    divAB(a,b);
    potBA(a,b);
    fatA(a,b);
    porcBA(a,b);
    subBA(a,b);
    divBA(a,b);    
    raizA(a,b);
    fatB(a,b);
    med(a,b);

// função de soma
}
function soma(a,b){
    document.getElementById("soma").innerHTML=a+b;
}

//Função de Multiplicação
function mult(a,b){
    document.getElementById("mult").innerHTML=a*b;
}

// função de Potência de A na base B - potAB
function potAB(a,b){
    document.getElementById("potAB").innerHTML=Math.pow(b, a);
}

// Raiz quadrada de B - raizB
function raizB(b){
    document.getElementById("raizB").innerHTML=Math.sqrt(b);
}

// Porcentagem de A em relação a B - porcAB
function porcAB(a,b){
    let calc = ((a / b) * 100).toFixed(2)    
    document.getElementById("porcAB").innerHTML= `${calc}%`;
}

// Subtração A-B - subAB
function subAB(a,b){
    document.getElementById("subAB").innerHTML=a-b;
}

// Divisão A/B - divAB
function divAB(a,b){
    document.getElementById("divAB").innerHTML=a/b;
}

// Potência de B na base A - potBA
function potBA(a,b){
    document.getElementById("potBA").innerHTML=Math.pow(a, b);
}

// Fatorial de A - fatA
function fatA(a) {
    function fatorial(a) {
        if (a < 0) return "Numero Negarivo";
        let resultado = 1;
        for (let i = 2; i <= a; i++) {
            resultado *= i;
        }
        return resultado;
    }
    document.getElementById("fatA").innerHTML = fatorial(a);
}

// Porcentagem de B em relação a A - porcBA
function porcBA(a,b){
    let calc = ((b / a) * 100).toFixed(2)  
    document.getElementById("porcBA").innerHTML= `${calc}%`;
}

// Subtração B-A - subBA
function subBA(a,b){
    document.getElementById("subBA").innerHTML=b-a;
}

// Divisão B/A - divBA
function divBA(a,b){
    document.getElementById("divBA").innerHTML=b/a;
}

// Raiz quadrada de A - raizA
function raizA(a){
    document.getElementById("raizA").innerHTML=Math.sqrt(a);
}

// Fatorial de B - fatB
function fatB(b){
    function fatorial(b) {
        if (a < 0) return "Numero Negarivo";
        let resultado = 1;
        for (let i = 2; i <= a; i++) {
            resultado *= i;
        }
        return resultado;
    }
    document.getElementById("fatA").innerHTML = fatorial(b);
}

// Média - med
function med(a,b){
    document.getElementById("med").innerHTML=a+b/2;
}
