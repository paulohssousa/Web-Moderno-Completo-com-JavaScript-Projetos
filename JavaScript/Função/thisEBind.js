const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradigmas: funcional e OO

// bind garante que 'this.' da funcao 'falar()' 
//do objeto 'pessoa' está referenciando ao próprio objeto
const falarDePessoa = pessoa.falar.bind(pessoa) 
falarDePessoa()

function Pessoa() {  // !
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa