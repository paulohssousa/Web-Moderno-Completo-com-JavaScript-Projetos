let numero = 1 //let tem escopo de funcao , global e de bloco
{
    let numero = 2
    console.log('dentro', numero)
}
console.log('fora =', numero)