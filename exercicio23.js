//Escreva um programa que verifica as cores de um semáforo.
let sinal = "Vermelho"
switch(sinal.toLowerCase()){
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Opção não disponível")
}
