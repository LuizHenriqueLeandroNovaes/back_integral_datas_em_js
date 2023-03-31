// Faça funções que recebam um `Date()` como argumento e formate a data, retornando um string como 
// nos exemplos abaixo (uma função para cada letra):


// ---

const { format } = require('date-fns');
const { ptBR } = require('date-fns/locale');

function Data(date){
    
    // a) ```05 de outubro de 2020```
    console.log("\nletra a");
    console.log(format(date,'dd \'de\' MMMM \'de\' yyyy',{locale: ptBR}));
    
    // b) ```05/10/2020```
    console.log("\nletra b");
    console.log(format(date,"dd/MM/yyyy"));
    
    // c) ```5 out```
    console.log("\nletra c");
    console.log(format(date,"d MMM",{locale: ptBR}));
    
    // d) ```05 out 2020```
    console.log("\nletra d");
    console.log(format(date,'dd MMM yyyy',{locale: ptBR}));
    
    // e) ```05 de out de 2020```
    console.log("\nletra e");
    console.log(format(date,'dd \'de\' MMM \'de\' yyyy',{locale: ptBR}));
    
    // f) ```05/out```
    console.log("\nletra f");
    console.log(format(date,"d/MMM",{locale: ptBR}));
    
}

const date = new Date(2020, 9 , 5 );

Data(date);
