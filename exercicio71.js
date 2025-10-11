//Exercício 71: Escreva uma função que aceite uma função de callback e um número, e execute a função de callback após um certo número de milissegundos especificados pelo número.
const number = 1000
const executecallback = () => { console.log(new Date().toLocaleTimeString('pt-br'))}
const setTimeoutCallback = (executecallback, number) => setTimeout(executecallback,number)
setTimeoutCallback(executecallback, number)