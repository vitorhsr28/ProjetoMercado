const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

mercadoJson.map((item, index)=>{
    let mercadoItem = c('.modelos .mercado-item').cloneNode(true);
    
    mercadoItem.querySelector('.mercado-item--img img').src = item.img;
    mercadoItem.querySelector('.mercado-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    mercadoItem.querySelector('.mercado-item--name').innerHTML = item.name;
    mercadoItem.querySelector('.mercado-item--desc').innerHTML = item.description;

    c('.mercado-area').append( mercadoItem);


})