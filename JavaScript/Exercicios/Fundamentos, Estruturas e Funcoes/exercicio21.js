// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do
// conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
// 1) crianças com menos de 10 anos pagam R$80; 
// 2) conveniados com idade entre 10 e 30 anos pagam R$50; 
// 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 
// 4) conveniados acima de 60 anos pagam R$130

function planoDeSaude (idade) {
    if (idade < 10) {
        console.log("Valor a ser pago é R$180")
    } else if (idade < 30) {
        console.log("Valor a ser pago é R$150")
    } else if (idade < 60) {
        console.log("Valor a ser pago é R$195")
    } else {
        console.log("Valor a ser pago é R$230")
    }
}

planoDeSaude(8)
planoDeSaude(25)
planoDeSaude(54)
planoDeSaude(80)