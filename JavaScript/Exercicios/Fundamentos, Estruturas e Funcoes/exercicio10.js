// Crie uma função que verifica se um número inteiro passado como parêmetro é
// divisível por 3 e retorne true ou false.

const divisivelPor3 = x => {
    if (x%3 === 0) {
        return true
    } else {
        return false
    }
}

console.log(divisivelPor3(15))
console.log(divisivelPor3(0))
console.log(divisivelPor3(13))
console.log(divisivelPor3(-4))
console.log(divisivelPor3(-3))
