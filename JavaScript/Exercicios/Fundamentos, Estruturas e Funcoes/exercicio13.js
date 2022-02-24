// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número
// referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch

function diaDaSemana (x) {
    switch (x) {
        case 1:
            console.log("Domingo")
            break
        case 2:
            console.log("Segunda")
            break
        case 3:
            console.log("Terça")
            break
        case 4:
            console.log("Quarta")
            break
        case 5:
            console.log("Quinta")
            break
        case 6:
            console.log("Sexta")
            break
        case 7:
            console.log("Sábado")
            break
        default:
            console.log('Dia inválido')
    }
}

diaDaSemana(1)
diaDaSemana(2)
diaDaSemana(3)
diaDaSemana(4)
diaDaSemana(5)
diaDaSemana(6)
diaDaSemana(7)
diaDaSemana(8)
diaDaSemana(0)
diaDaSemana(-1)
diaDaSemana('opa')