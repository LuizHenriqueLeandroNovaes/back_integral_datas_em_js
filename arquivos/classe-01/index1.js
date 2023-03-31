// Faça um programa que cria uma nova data armazenando o momento atual numa variável.

// Na sequência, crie uma data que guarda o momento da ceia de natal de 2020. 
//Suponha que a ceia é as 21h30 no seu fuso horário.

const { format } = require('date-fns');

const date = new Date(2020, 11 , 25 , 21 , 30);

console.log(format(date,"dd/MM/yyyy HH:mm"));


// npm install date-fns --save