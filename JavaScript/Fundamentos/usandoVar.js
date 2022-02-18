{
    {
        {
            {
                var sera = 'Será???' // visivel fora do bloco
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}
teste()
// console.log(local) // nao tem acesso a variavel var no escopo da funcao

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// var tem escopo de funcao e global