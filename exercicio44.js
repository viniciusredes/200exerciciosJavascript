//Usando um laço do-while, crie um programa que imprima a soma de duas matrizes.
let matriz1 = [[0,1],[2,3]];
let matriz2 =[[10,21],[5,15]];
let matrizSoma = [[0,0],[0,0]];
let i = 0
let j = 0
do{
  matrizSoma[i][j] = matriz1[i][j] + matriz2[i][j]
  j++
  if(j > 1 ){
    i++
    j = 0
  }
}while(i < matriz1.length)

console.log(matrizSoma)
