import readLineSync from 'readline-sync'
import ck from 'chalk'

const valores =[]
let input =""

//laço while 
while( input != "sair")
{
  valores.push(input)
  input= readLineSync.question("Digite as propriedades de Css: ").toLocaleLowerCase()
}
//mostra o conteudo do vetor
console.log(ck.bgRed(valores.sort().join('\n'))) 