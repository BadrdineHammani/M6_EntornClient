let letra = null;
let resposta = prompt("Introduce un texto: ");
let respostaN = prompt("Introduce un caracter: ");


for(var i=0; i<resposta.length; i++){
    if(resposta.charAt(i) == resposta.charAt(respostaN)){
        letra = resposta.charAt(i);
    }
}

alert("Corresponde a la letra "+letra)