//Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.
let escolhaUsuario = prompt("Escolha uma das opções (Pedra, Papel, Tesoura)");
let escolhaPrograma = ["Pedra", "Papel", "Tesoura"]
let index = Math.floor(Math.random()*3)
let win = false;
do{
  //Papel embrulha a Pedra
  //Pedra quebra a Tesoura
  //Tesoura corta o Papel
  if((escolhaUsuario == "Pedra" && escolhaPrograma[index] == "Papel")){
    console.log(`${escolhaUsuario} x ${escolhaPrograma[index]}`)
    console.log("Papel embrulha a Pedra");    
  }
  if(escolhaUsuario == "Pedra" && escolhaPrograma[index] == "Tesoura"){
    console.log(`${escolhaUsuario} x ${escolhaPrograma[index]}`)
    console.log("Pedra quebra a Tesoura")
    win = true;
  }
  if(escolhaUsuario == "Tesoura" && escolhaPrograma[index] == "Pedra"){
    console.log(`${escolhaUsuario} x ${escolhaPrograma[index]}`)
    console.log("Pedra quebra a Tesoura")
  }
  if((escolhaUsuario == "Papel" && escolhaPrograma[index] == "Pedra")){
    console.log(`${escolhaUsuario} x ${escolhaPrograma[index]}`)
    console.log("Papel embrulha a Pedra");
    win = true;
  }
  if(escolhaUsuario == "Papel" && escolhaPrograma[index] == "Tesoura"){
    console.log(`${escolhaUsuario} x ${escolhaPrograma[index]}`)
    console.log("Tesoura corta o Papel");
  }
  if((escolhaUsuario == "Tesoura" && escolhaPrograma[index] == "Papel")){
    console.log(`${escolhaUsuario} x ${escolhaPrograma[index]}`)
    console.log("Tesoura corta o Papel");
    win = true;
  }
  if(win){
    console.log("Parabéns você é o vencedor!")
  }
  index = Math.floor(Math.random()*3) 
}while(!win)