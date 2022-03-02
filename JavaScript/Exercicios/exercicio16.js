//  Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa
// recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com
// os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, '+', 3). A
// função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: '+'. '-', '*' e '/'. Crie um
// caso default para operações inválidas.

function calculadora (x, operacao, y) {
    if (operacao == '/' && y == 0) {
        console.log('Operação inválida, divisão por zero!')
        return
    }
    switch (operacao) {
        case '+':
            console.log(`Resultado: ${x + y}`)
            break
        case '-':
            console.log(`Resultado: ${x + y}`)
            break
        case '*':
            console.log(`Resultado: ${x + y}`)
            break
        case '/':
            console.log(`Resultado: ${x + y}`)
            break
        default:
            console.log('Operação inválida!')
    }
}

calculadora(2, '+', 3)
calculadora(2, '-', 3)
calculadora(2, '*', 3)
calculadora(2, '/', 3)
calculadora(2, '#', 3)
calculadora(2, '/', 0)