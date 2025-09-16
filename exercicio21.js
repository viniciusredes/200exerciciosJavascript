//Escreva um programa que determina a estação do ano com base no mês.
let mes = prompt(
`Digite o número que representa mês que deseja
  1 - Janeiro | 2 - Fevereiro  | 3 - Março     | 
  4 - Abril   | 5 - Maio       | 6 - Junho     |
  7 - Julho   | 8 - Agosto     | 9 - Setembro  |
  10 - Outubro | 11 - Novembro | 12 - Dezembro |`
)
switch(parseInt(mes)){
  case 1:
  case 2:
  case 3:
    alert("Verão");
    break;
  case 4:
  case 5:
  case 6:
    alert("Outono");
    break;
  case 7:
  case 8:
  case 9:
    alert("Inverno");
    break;
  case 10:
  case 11:
  case 12:
    alert("Primavera");
    break;
}