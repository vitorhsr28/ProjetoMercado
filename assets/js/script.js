let modalQt


//Fazendo um "macro" para deixar o código menor..
const c = el => document.querySelector(el);
const cs = el => document.querySelector(el);
let cart = [];
let modalKey = 0;

axios.get('http://localhost:3000/mercado')

.then(res => { 
    //Resultado da Api
    let produtos = (res.data)
    //Anda no objeto que recebe da api
    for(let i = 0; i <= produtos.length; i++){
        //puxando o a posição do array
        let produtosApi = produtos[i]
        // array vazio
        let formatado = []
       // enviando as informações que vem do array como objeto para um array vazio pois o .map logo abaixo
       //só funciona em array
       formatado.push(produtosApi)
      //listando o array
       formatado.map((item, index) =>{
           //O método cloneNode() duplica um elemento node da estrutura de um documento DOM.
           // Ele retorna um clone do elemento para o qual foi invocado.
           let mercadoItem = c('.models .mercado-item').cloneNode(true);
           //Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico.
            mercadoItem.setAttribute('data-key', index);
            //Retorna o primeiro elemento descendente do elemento em que a função foi invocada e que corresponde aos seletores especificado
            mercadoItem.querySelector('.mercado-item--name').innerHTML = item.name
            mercadoItem.querySelector('.mercado-item--price').innerHTML = `R$: ${item.price.toFixed(2)}`   
            mercadoItem.querySelector('.mercado-item--desc').innerHTML = item.description
            mercadoItem.querySelector('.mercado-item--img img').src = item.img
            //addEventListener() registra uma única espera de evento em um único alvo
            mercadoItem.querySelector('.mercado-link').addEventListener('click', (e)=>{
                e.preventDefault();
                
                modalQt = 1;

               let key = e.target.closest('.mercado-item').getAttribute('data-key')

               c('.mercadoInfo h1').innerHTML = formatado[key].name;
               c('.mercadoInfo--desc').innerHTML = formatado[key].description
               c('.mercadoBig img').src = formatado [key].img;
               c('.mercadoInfo--actualPrice').innerHTML = `R$: ${formatado[key].price.toFixed(2)}` 

               c('.mercadoInfo--qt').innerHTML = modalQt;
               
                

                c('.mercadoWindowArea').style.opacity = 0;
                c('.mercadoWindowArea').style.display= 'flex';
                setTimeout(()=>{
                    c('.mercadoWindowArea').style.opacity = 1;

                },200)
              
            });
            c('.mercado-area').append(mercadoItem);
       })
    }
 })







 


 .catch(err => {
     console.log('Erro => ' +err)
 })

 const url = "​https://api.postmon.com.br/v1/cep/"
 
 let botao = document.getElementById("buscaCEP")

botao.addEventListener('click', ()=> {
    let cepDigitado = document.getElementById("cep")
    buscaEndereco(cepDigitado.value)
})

 function buscaEndereco(cep){
     console.log("Buscando informações do endereço para o cep: " + cep + "...")
 
     const urlComCep = `https://api.postmon.com.br/v1/cep/${cep}`
 axios.get(urlComCep)
     .then(res => {
         console.log(res)
         let frete = res.data.bairro === "Jardim Sônia Maria" ? 1 : 1.2
         console.log(frete * 25)
     })
     .catch(err => {
         alert('Esse CEP nao existe' + err)
     })
 }

