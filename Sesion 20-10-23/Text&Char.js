let repetides = 0;
//do{
let resposta = prompt("Introduce un texto: ");
let respostaP = prompt("Introduce un caracter: ");
//}while(resposta !== String && respostaP !== String);

for(var i=0; i<resposta.length(); i++){
    if(resposta.charAt(i) == respostaP.charAt(0)){
        repetides++;
    }
    console.log(repetides);
}

if(repetides>1  && repetides<=4){
    document.getElementById("resposta").innerHTML="El caràcter es repeteix "+repetides+" vegades";
}else if(repetides<=1 || repetides>4){
    document.getElementById("resposta").innerHTML="La paraula no es repeteix entre 2 i 4 vegades";
}