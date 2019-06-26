function Palindromo(cad){

 var a = cad.split("").reverse().join("");
     a=a.replace(/ /g,'');
 
    if (a == cad.replace(/ /g,'')){
        return true;
    }
    else return false;
}
function countpalabra(cad){
    var palabras= cad.split(" ");
    return palabras.length;
}
function countletras(cad){
    letra =  cad.split("");
    var contador=0;
    for(var i =0; i<=letra.length-1; i++){
        if(letra[i]!==" "){
            contador++;
        }
    }
  
    return contador;
}

function Vocales(cad){
    var vocal=['a','e','i','o','u'];
    cad = cad.toLowerCase();
    letra = cad.split("");
    var contador = 0;
    for(var i =0; i<=letra.length; i++){
        for(var j=0; j<vocal.length; j++){
            if(letra[i] == vocal[j]){
                contador ++;
            }
        }
    }

    return contador;
}

function Consonantes(cad){
    var consonante=['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    cad = cad.toLowerCase();
    letra = cad.split("");
    var contador = 0;
    for(var i =0; i<=letra.length; i++){
        for(var j=0; j<consonante.length; j++){
            if(letra[i] == consonante[j]){
                contador ++;
            }
        }
    }

    return contador;
}

module.exports.palindromoe = Palindromo;
module.exports.numpalabras = countpalabra;
module.exports.numletras = countletras;
module.exports.vocales = Vocales;
module.exports.Consonantes = Consonantes;
