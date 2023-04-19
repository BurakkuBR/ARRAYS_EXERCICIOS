/*Faça um programa que pergunte ao usuário seu nome e seu e-mail.
 Em seguida, imprima no console a seguinte mensagem

 O e-mail `emailDoUsuario` foi cadastrado com sucesso.
 Seja bem vinda(o), `nomeUsuario`

 const nome = prompt ("Digite o seu nome: ");
const email = prompt ("Digite o seu E-mail: ");

/alert ("O E-mail do usuário foi cadastrado com sucesso.");
alert ("Bem vindo " + nome);
*/

// 1. Faça um programa, seguindo os passos:
    
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// c) Imprima o array no console

// d) Peça ao usuário que digite o *índice* de uma tarefa que ele já realizou: 0, 1 ou 2 

// e) Remova da lista o item de índice que o usuário escolheu.

// f) Imprima o array no console

/*let listaDeTarefas = [];

listaDeTarefas [0] = prompt ("Digite a primeira tarefa a ser realizada no seu dia: ");
listaDeTarefas[1] = prompt ("Digite a segunda tarefa a ser realizada no seu dia: ");
listaDeTarefas [2] = prompt ("Digite a terceira tarefa a ser realizada no seu dia: ");
console.log(listaDeTarefas);
let indice = prompt("Digite o indice de uma tarefa ja realizada (0,1,2) ");
listaDeTarefas.splice(indice,1);
console.log (listaDeTarefas);
*/

// Receba uma frase e retonre um array onde cada elemento é uma das palavras da frase, ignorando os espaços.

/* let frase = prompt ("Digite uma frase: ")
frase.trim;
 let array = frase.split(' ');
alert (array + "/n" + array.length);
*/

// 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`,
// faça um programa que ache o índice da palavra Abacaxi e imprima tanto o índice quanto o tamanho do array.
/*
let listaFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
 i = listaFrutas.indexOf("Abacaxi");
console.log(i, listaFrutas.length);
*/


// 3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
// a) Imprima no console o array completo
    
// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, *uma embaixo da outra*.
    
// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
//Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

/*let listaComida = ["Pizza", "Hamburger", "Churrasco", "Strogonoff", "Lasanha"];
console.log (listaComida);
alert("Essas são minhas comidas preferidas: " + '\n'
   + listaComida [0] + '\n'
    + listaComida  [1] + '\n'
   + listaComida  [2] + '\n'
   + listaComida  [3] + '\n'
   + listaComida  [4] + '\n'
   );

   listaComida[1] = prompt ("Digite uma comida para substituir o indice 1: ");

   alert("Essas são minhas comidas preferidas: " + '\n'
   + listaComida [0] + '\n'
   + listaComida  [1] + '\n'
   + listaComida  [2] + '\n'
   + listaComida  [3] + '\n'
   + listaComida  [4] + '\n'
   );
   */

   // 4 Crie um script que pergunte 3 números ao usário, coloque em um array, depois exiba tal array.
   // Modifique os elementos do array de modo a sequencia de números ficar ao contrário
   // Ou seja, se digitou 1,2,3
   // Vai aparecer: 3,2,1

   let inverter = [prompt ("Digite o primeiro numero"),
   prompt ("Digite o segundo numero"),
   prompt ("Digite o terceiro numero")
];
inverter.reverse();
alert("Seu números invertidos são: \n" + inverter);





