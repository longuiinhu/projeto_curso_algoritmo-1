/*escreval ("Digite o nome do aluno")
   leia(nome)
   escreval ("Digite a primeira nota do aluno")
   leia(nota1)
   escreval ("Digite a segunda nota do aluno")
   leia(nota2)
   media := (nota1 + nota2) / 2

   se media >= 5  entao
        escreval ("O Aluno ", nome, " foi: Aprovado")
   senao
        escreval ("O Aluno ", nome, " foi: Reprovado")
    Fimse*/

var nome, nota1, nota2;
nome = prompt("Digite o nome do aluno")
nota1 = prompt("Digite a primeira nota do aluno")
nota2 = prompt("Digite a segunda nota do aluno")

media = (parseInt (nota1) + parseInt (nota2)) / 2

if(media >= 5)
    alert ("O Aluno " + nome + " foi: Aprovado")
else
    alert ("O Aluno " + nome + " foi: Reprovado")
