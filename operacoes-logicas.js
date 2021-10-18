/*
   passou := falso
   escreval ("Digite o nome do aluno")
   leia(nome)
   escreval ("Digite a primeira nota do aluno")
   leia(nota1)
   escreval ("Digite a segunda nota do aluno")
   leia(nota2)
   media := (nota1 + nota2) / 2

   se media >= 5  entao
        passou := verdadeiro
   fimse
   
   se (passou) && (media >=5 || media <= 70) entao
        escreval ("O Aluno ", nome, " foi: Aprovado")
   senao
        escreval ("O Aluno ", nome, " foi: Reprovado")
    Fimse
*/

var nome, nota1, nota2, passou ;

passou = false;

nome = prompt("Digite o nome do aluno")
nota1 = prompt("Digite a primeira nota do aluno")
nota2 = prompt("Digite a segunda nota do aluno")

media = (parseInt (nota1) + parseInt (nota2)) / 2

if(media >= 5)
    passou = true;

if(passou && (media >= 7 && media <= 9))
    alert ("O Aluno " + nome + " foi: Aprovado")
else
    alert ("O Aluno " + nome + " foi: Reprovado")
