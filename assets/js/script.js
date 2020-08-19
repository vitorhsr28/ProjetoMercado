const c = el => document.querySelector(el);
const cs = el => document.querySelector(el);

axios.get('http://localhost:3000/mercado')

.then(res => { 
    //Resultado da Api
    let produtos = (res.data)
    //Anda no objeto que recebe da api
    for(let i = 0; i <= produtos.length; i++){

       let produtosApi = produtos[i]
       let formatado  = []
       formatado.push(produtosApi)


       formatado.map((item) =>{
           let mercadoItem = c('.models .mercado-item').cloneNode(true);

            mercadoItem.querySelector('.mercado-item--name').innerHTML = item.name
            mercadoItem.querySelector('.mercado-item--price').innerHTML = `R$: ${item.price.toFixed(2)}`   
            mercadoItem.querySelector('.mercado-item--desc').innerHTML = item.description
            mercadoItem.querySelector('.mercado-item--img img').src = item.img
            c('.mercado-area').append(mercadoItem);

       })
    }
 })
 
 .catch(err => {
     console.log('Erro => ' +err)
 })

