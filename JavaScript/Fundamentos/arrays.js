const valores = [7.9, 5.9, 1.1, 4.5]
console.log(valores[0], valores[3])
console.log(valores[4]) // undefined

valores[4] = 10
console.log(valores)
console.log(valores.length) // tamanho do vetor

valores.push({id: 3}, false, null, 'teste') //metodo .push para inserir valores
console.log(valores)

console.log(valores.pop()) //metodo .pop para retirar valores ( o último no caso)
delete valores[0] //deleta valores na posição n
console.log(valores)

console.log(typeof valores)