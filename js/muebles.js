 
//Elemento creado desde js 
let barra= document.getElementById('top');
let parrafo = document.createElement("p");
parrafo.classList.add('pDesc')
parrafo.innerHTML= "<p>Cupon de descuento <span>descuento10</span></p>";
barra.appendChild(parrafo);

// Botones
const btnabrir = document.querySelector("#abrirCart");
btnabrir.onclick = () => abrirCarrito();
let abrirCarrito = () => document.getElementById("carrito").style.right = "0";

const btncerrar = document.querySelector(".cerrar");
btncerrar.onclick = () => cerrarCarrito();
let cerrarCarrito = () => document.getElementById("carrito").style.right = "-100vw";

// const drop = document.querySelector("#shopCategorias");
// drop.onclick = () => dropNav();
// let dropNav = () => document.getElementsByClassName("categorias").classList.add('show')

const btnconfirmar = document.querySelector(".confirmar");
btnconfirmar.addEventListener('click', ()=> {
  Swal.fire({
    text:"Gracias por tu compra!",
    confirmButtonText:'continuar'
  })
}) 

const btnVaciar = document.getElementById('vaciar');
btnVaciar.onclick = () => vaciarCarrito();
let vaciarCarrito = () => {
  carrito = [];
  mostrarCarritoItems();
}


//Fetch json catalogo de productos
 fetch("js/productos.json")
 .then((res) => res.json())
 .then((data)=> {mostrarCatalogo(data);})

//Mostrar todos los productos en galeria
function mostrarCatalogo(data){
    productos = data;
    productos.forEach((producto)=>{
      const contenedor= document.getElementById("galeria");
      contenedor.innerHTML+=`
                          <div class= "card">
                            <img src= ${producto.img}>
                            <button class="botonAddItem" onclick="AgregarCarrito(${producto.id},${producto.cantidad})">Agregar al Carrito</button>
                            <img src="imagenes/icons8-heart-24.png" class="wishlist">
                            <h3>${producto.categoria} ${producto.nombre}</h3>
                            <p class="precioCard">$${producto.precio}</p>                           
                          </div>`
    });
    
// const btnAgregado= document.getElementsByClassName('botonAddItem');
// btnAgregado.addEventListener('click', () => {
//       Toastify({
//         text:'Producto agregado al carrito',
//         duration: 3000,
//         position:'right',
//         style:{
//           background:'rgb(108, 185, 199)'
//         }
//       }).showToast();
//     })  
}


let carrito = JSON.parse(localStorage.getItem("CARRO")) || [];

function AgregarCarrito(id, cantidad){
cantidad=document.getElementsByClassName('cantidad').value;
  if (carrito.some((item) => item.id === id && cantidad >= 1)) {
    cantidad++;  
  } else {
    const item = productos.find((producto) => producto.id === id);
    carrito.push({
      ...item,
      cantidad: 1,
    });      

  }
  actualizarCarrito();
}

function actualizarCarrito() {
  mostrarCarritoItems();
  calcularTotal();
  localStorage.setItem("CARRO", JSON.stringify(carrito));
}

let total = 0;
var carro = document.querySelector('#cart');

function mostrarCarritoItems(){
  carro.textContent = '';
  carrito.forEach((item)=>{
    
      const carroItem = document.createElement('li');
      carroItem.innerHTML+=
                            `<img class="imgCarrito" src="${item.img}" alt="">
                            <h4 class="nombreItem">${item.categoria} ${item.nombre}</h4>
                            <p class="cantidad" id="${item.id}"> ${item.cantidad}</p>
                            <p class="precioI">$${item.precio}</p>
                            <button class="eliminar" onclick="quitarItem(${item.id})">✗</button>`;
  
  carro.appendChild(carroItem);
  
  });
  carritoVacio = document.createElement("p");
  carro.appendChild(carritoVacio);
  carrito.length === 0  && (carritoVacio.innerText = ("El carrito esta vacio"));

//Cantidad de productos en el carrito
  var cantidadTotal = carrito.length;
  const cantCarrito = document.getElementById('shopCart');
  cantCarrito.innerText = "(" + cantidadTotal + ")";
}
actualizarCarrito();

function quitarItem(id) {
  carrito = carrito.filter((item) => item.id !== id);
  actualizarCarrito();
}


function calcularTotal(){
// SUBTOTAL
  var subtotales = 0;
  carrito.forEach((item) => {
    subtotales += item.precio ;
  });
  var carroSubTotal = document.createElement('p');
  carroSubTotal.classList.add('subT');
  carroSubTotal.innerText = `SUBTOTAL $ ` + subtotales  ;
  carro.appendChild(carroSubTotal);

// CUPON DESCUENTO
function cupon(){
  let cuponIn= document.getElementById("cupon")
  if(cuponIn.value == "descuento10"){
    descuento = subtotales * 0.10;
    console.log(descuento)
  }  else{
    descuento=0;
    alert("No existe el cupon "+ cuponIn.value)  
  } 
  actualizarCarrito()
// TOTAL
  if (subtotales > 0){
  var total = "$ " + (subtotales - descuento);
  var carroTotal = document.createElement('carritoTotal');
  carroTotal.innerText = `TOTAL ${total} `;
  carroTotal.classList.add('totalCarrito');
  carro.appendChild(carroTotal);
  } 
}
const botonCupon = document.getElementById("btnDescuento")
botonCupon.addEventListener('click', cupon);
}




