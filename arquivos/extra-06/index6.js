// Uma determinada promoção é válida por apenas 24h. Faça uma função que recebe dois argumentos, sendo:
// 1. O Date() de início da promoção
// 2. O Date() em que o cliente solicitou o uso desta promoção

// Sua função deve retornar `true` caso o usuário esteja autorizado a usufruir da promoção, e `false` caso contrário.

// ---

function Data (dateInicio, dateSolicitado){

    const duracaoPromocao = 24*60*60*1000;

    const diferencaDatas = dateSolicitado - dateInicio;

    if(diferencaDatas <= duracaoPromocao){
        console.log(true);
    }else{
        console.log(false);
    }
    
}

const dateInicio = new Date(2021,3,24,12,30);
const dateSolicitado = new Date(2021,3,25,20,30);

Data(dateInicio , dateSolicitado);

