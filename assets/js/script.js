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

       let produtosApi = produtos[i]
       let formatado  = []
       formatado.push(produtosApi)

       formatado.map((item, id) =>{
           let mercadoItem = c('.models .mercado-item').cloneNode(true);

            mercadoItem.setAttribute('data-key', id);
            mercadoItem.querySelector('.mercado-item--name').innerHTML = item.name
            mercadoItem.querySelector('.mercado-item--price').innerHTML = `R$: ${item.price.toFixed(2)}`   
            mercadoItem.querySelector('.mercado-item--desc').innerHTML = item.description
            mercadoItem.querySelector('.mercado-item--img img').src = item.img
            mercadoItem.querySelector('.mercado-link').addEventListener('click', (e)=>{
                e.preventDefault();
                modalKey = key;

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
 c('.mercadoInfo--addButton').addEventListener('click', ()=> {
     cart.push({
         id:db.js[modalKey].id,
         qt:modalQt
     })
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