function main(){
    var a=parseInt(document.getElementById("A").value);
    var b=parseInt(document.getElementById("B").value);
    soma(a,b);
    /*... chama as outras funções
    ex:
    mult(a,b);
    (assim por diante)
    */
}
function soma(a,b){
    document.getElementById("soma").innerHTML=a+b;
}
//... crie a função para cada caso testes