function validaPlacar(placar){                      // Verifica se o placar informado no form é maior/igual                                  
        if ( placar >= 0.00 && placar < 1000.00){   // a 0 ou menor que 1000.
            return "";
        }else{        
            return "O placar deve estar entre 0 e 999.";
        }
    }

function validaJogo(codJogo){                // Verifica se a descrição do jogo está informada 
    if(codJogo.length == 0){
        return "A descrição do jogo deve ser informada";
    } else {
        return "";
    }
}

    var maximoPontos = 0;                     //Inicializa variável para controle do Máximo da temporada
    var quebraMaximo = 0;                     //Inicializa variável para controle da quebra de recorde máximo
    function calculaMaximoTemporada(placar){
        if (placar > maximoPontos){
           maximoPontos = placar;             //Função que compara o placar informado com a variável maximoPontos. 
           quebraMaximo++;                    //Caso ela seja maior, armazena o valor como Máximo da temporada.
           return maximoPontos;               //E caso entre no IF, incrementa a variável quebraMaximo indicando  
        }                                     //que houve quebra de recorde.
        return maximoPontos;
    }

    var minimoPontos = 9999999;                 //Inicializa variável para controle do Mínimo da temporada
    var quebraMinimo = 0;                       //Inicializa variável para controle da quebra de recorde mínimo
    function calculaMinimoTemporada(placar){      
      if (placar < minimoPontos){               //Função que compara a placar informado com a variável minimoPontos.
         minimoPontos = placar;                 //Caso ela seja menor, armazena o valor como Mínimo da temporada.
         quebraMinimo++;   
         console.log("Minimo " + minimoPontos);  //E caso entre no IF, incrementa a variável quebraMinimo indicando
         return minimoPontos;  
         }                                       //que houve quebra de recorde mínimo.
     return minimoPontos;
    }  