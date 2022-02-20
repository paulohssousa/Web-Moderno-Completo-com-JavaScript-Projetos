// IF
function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1) // imprime
soBoaNoticia(6.1) // nao imprime

function seForVerdade(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdade()          // false
seForVerdade(null)      // false
seForVerdade(undefined) // false
seForVerdade(NaN)       // false
seForVerdade('')        // false
seForVerdade(0)         // false
seForVerdade(-1)        // true
seForVerdade(' ')       // true
seForVerdade('?')       // true
seForVerdade([])        // true
seForVerdade([1, 2])    // true
seForVerdade({})        // true

function teste1(num) {
    if(num > 7)
        console.log(num)      // se não ouver as chaves para o bloco '{}' 
        console.log('Final')  // javascript reconhece apenas a primeira sentença identada
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {  // nao usar ';' nas estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)
