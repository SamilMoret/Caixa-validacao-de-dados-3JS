var nome = prompt('Qual e seu nome')
console.log(nome)
var sobreNome = prompt('Sobrenome')
console.log(sobreNome)
var edade = prompt('Edade')
console.log(edade)
var profissao = prompt('Profissao')
console.log(profissao)
alert('Bem-Vind@,' + nome)


console.table(
  { 
    Nome: nome,
    Sobrenome: sobreNome,
    Edade: edade,
    Profissao: profissao
  }
)