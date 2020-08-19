const axios = require('axios')

axios.get('http://localhost:3000/mercado')

.then(res => { 
    let produtos = (res.data)

    for(let i = 0; i <= produtos.length; i++){

        console.log(produtos[i])

    
    }
 })

 .catch(err => {
     console.log('Erro ' +err)
 })


/* 
 mercadoJson.map((item)=>{

    let resultadoitem = c('.modelos .mercado-item').cloneNode(true);
    
    resultadoitem.querySelector('.mercado-item--img img').src = item.img;
    resultadoitem.querySelector('.mercado-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    resultadoitem.querySelector('.mercado-item--name').innerHTML = item.name;
    resultadoitem.querySelector('.mercado-item--desc').innerHTML = item.description;

    c('.mercado-area').append( resultadoitem);


})  */
