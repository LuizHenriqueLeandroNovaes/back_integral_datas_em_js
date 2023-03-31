// Uma determinada loja funciona das 8h00 (já aberto) às 18h (ainda aberto, fechado as 18h01). 
// Faça uma função que recebe como argumento um objeto Date do JS, representando o momento em que o 
// cliente chega na loja.
//  Sua função deverá retornar `true` caso a loja esteja aberta e `false` caso a loja esteja fechada.

// Pode considerar o fuso UTC para tudo.

// ```
// taAberto(newDate(2015,1,1,12)); // deve retornar true

// taAberto(newDate(2015,1,1,2)); // deve retornar false

// ```


function Data (date){

    const horaAtual = date.getHours()
    
    if(horaAtual>=8 && horaAtual<=18){
        console.log(true);
    }else{
        console.log(false);
    }
    
}

const date = new Date(2015,1,1,12);

Data(date);




// const taAberto = new Date();

// taAberto(newDate(2015,1,1,12)); // deve retornar true

// taAberto(newDate(2015,1,1,2)); // deve retornar false

// const final = new Date();
// const inicioTimestamp = +finalDaCopa;

