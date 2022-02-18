let valor // declarada e não inicializada
console.log(valor) //undefined

valor = null // inicializada com ausência de valor
console.log(valor)
//console.log(valor. toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco)
// delete produto.preco  // deletar atributo de produto
console.log(produto)

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)