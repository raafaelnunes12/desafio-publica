var botaoAdicionar = document.querySelector("#adicionar-jogo"); // Localiza o botão Adicionar no form Html
botaoAdicionar.addEventListener("click", function(event) {      // Associa o evento click do botão
    event.preventDefault();                                     // chama função para restaurar o comportamento padrão do botão

    // adicionando o registro do jogo na tabela
    var form = document.querySelector("#form-adiciona");  //seleciona os dados informados no formulário
    var registro = obtemJogoDoFormulario(form);           // Armazena os dados retornados do Jogo

    var erroJogo = validaJogo(registro.codJogo);     //Armazena o retorno da função validaJogo
    var erroPlacar = validaPlacar(registro.placar);  //Armazena o retorno da função validaPlacar
    
    if (erroJogo.length > 0){                                     // Verifica se houve alguma mensagem de erro, comparando se o retorna da variável erroJogo, que é uma string, é maior do que 0.
        var mensagemErro = document.querySelector("#erro-jogo");  // Grava o retorno da função validaJogo na tag Span com o id erro-jogo
        mensagemErro.textContent = erroJogo;                      // Grava o retorno da função validaJogo na tag Span com o id erro-jogo
        return;
    }

    if (erroPlacar.length > 0) {                                   // Verifica se houve alguma mensagem de erro, comparando se o retorna da variável erroPlacar, que é uma string, é maior do que 0.
        var mensagemErro = document.querySelector("#erro-placar"); // Grava o retorno da função validaPlacar na tag Span com o id erro-placar
        mensagemErro.textContent = erroPlacar;                     // Grava o retorno da função validaPlacar na tag Span com o id erro-placar
        return;
    }
    
    adicionaJogoNaTabela(registro);  //Monta a estrutura da table do id tabela-jogos    
 
    form.reset();  // Limpa todas as informações dos campos do form

    var errosJogo = document.querySelector("#erro-jogo");
    var errosPlacar = document.querySelector("#erro-placar");
    errosJogo.innerHTML = "";                                      //Remove as mensagens de validação apresentadas
    errosPlacar.innerHTML = "";
});

function obtemJogoDoFormulario(form) {                                      //Recebe as informações da variável jogo;
    var jogo = {                                                            //Inicia variável
        codJogo: form.jogo.value,                                           //Informação do campo Jogo do form
        placar: form.placar.value,                                          //Informação do campo Placar do form        
        minimoTemporada: calculaMinimoTemporada(Number(form.placar.value)), //Retorno da função calculaMinimoTemporada
        maximoTemporada: calculaMaximoTemporada(Number(form.placar.value)), //Retorno da função calculaMaximoTemporada  
        recordeMinino: quebraMinimo,                                        //Retorno da variável quebraMinimo
        recordeMaximo: quebraMaximo                                         //Retorno da variável quebraMaximo       
    }
    return jogo;
}

function montaTd(dado, classe) {             // Função que monta a estrutura do TD da tabela, recebendo
    var td = document.createElement("td");   // a informação do jogo e a class css. 
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function montaTr(registro) {                   // Função que gera a tag TR da tabela com as informações
    var jogoTr = document.createElement("tr"); // do jogo, inserindo o registro das tags TD retornadas na
    jogoTr.classList.add("jogo");              // pela função montaTd.

    jogoTr.appendChild(montaTd(registro.codJogo, "info-jogo"));
    jogoTr.appendChild(montaTd(registro.placar, "info-placar"));
    jogoTr.appendChild(montaTd(registro.minimoTemporada, "info-minimoTemporada"));
    jogoTr.appendChild(montaTd(registro.maximoTemporada, "info-maximoTemporada"));
    jogoTr.appendChild(montaTd(registro.recordeMinino, "info-recordeMinino"));
    jogoTr.appendChild(montaTd(registro.recordeMaximo, "info-recordeMaximo"));
    return jogoTr;
}

function adicionaJogoNaTabela(registro) {                   // Recebe o retorno da função montaTr e insere
    var jogoTr = montaTr(registro);                         // na tabela do form que possui o id tabela-jogos
    var tabela = document.querySelector("#tabela-jogos");
    tabela.appendChild(jogoTr);
}