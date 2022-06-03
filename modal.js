const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]
const filterXprice = document.getElementById('filterXprice');


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) => {
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation();
})

filterXprice.addEventListener('change',filterPoducts);

function filterPoducts(event) {
    contenedorProductos.innerHTML = '';

    const arregloNuevo = event.target.value === 'Menor a 1101'
    ? stockProductos.filter(stockProducto => stockProducto.precio < 1101)
    : event.target.value === 'Entre 1102 y 1200'
    ? stockProductos.filter(stockProducto => stockProducto.precio >=1102 && stockProducto.precio <=1200)
    : event.target.value === 'Mayor a 1200'
    ? stockProductos.filter(stockProducto => stockProducto.precio >1200)
    : null;

    arregloNuevo.map(stockProducto => createCard(stockProducto));    
}

let prueba = createCard(stockProductos);
console.log(prueba);
console.log(createCard(stockProductos));