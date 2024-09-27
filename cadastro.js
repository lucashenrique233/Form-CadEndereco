'use strict'; // Modo restrito
// Este modo faz com que o Javascript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/* Consumo de API - https://viacep.com.br/ */
 
// Função para limpar formulário
const limparFormulario = () =>{
    document.getElementById('logradouro').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('complemento').value = '';
 
}
 
const eNumero = (numero) => /^[0-9]+$/.test();
 
 
// lenght é uma propriedade que verifica a quantidade de caracteres no argumento CEP
const cepValido = (cep) => cep.lenght == 8 && eNumero (cep);
 
// Função para preencher formulário como campos da API
const preencherFormulário = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('uf').value = endereco.uf;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
}
 
 
// Função de consumomde API viaCEP
// Função assyncrona : preencher os dados sem ser em tempo real
const pesquisarCep = async() =>{
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
   
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();
 
        // Função verdadeiro ou falso
        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontado');
        }else{
            preencherFormulário(addres);
        }
 
    }else{
        alert("CEP incorreto");
   
    }
}

