 
//Elemento creado desde js 
let barra= document.getElementById('top');
let parrafo = document.createElement("p");
parrafo.classList.add('pDesc')
parrafo.innerHTML= "<p>Cupon de descuento <span>DESCUENTO10</span></p>";
barra.appendChild(parrafo);

// Botones
const btnabrir = document.querySelector("#abrirCart");
btnabrir.onclick = () => abrirCarrito();
let abrirCarrito = () => document.getElementById("carrito").style.right = "0";

const btncerrar = document.querySelector(".cerrar");
btncerrar.onclick = () => cerrarCarrito();
let cerrarCarrito = () => document.getElementById("carrito").style.right = "-100vw";

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
                            <img src="imagenes/icons8-heart-24.png" class="wishlist">
                            <h3>${producto.categoria} ${producto.nombre}</h3>
                            <p class="precioCard"> ${producto.precio}</p>
                            <button class="botonAddItem" onclick="AgregarCarrito(${producto.id})">Agregar al Carrito</button>
                          </div>`
    });
}

let carrito = JSON.parse(localStorage.getItem("CARRO")) || [];

function AgregarCarrito(id){
  if (carrito.some((item) => item.id === id)) {
    cantidad++
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
                            <p class="nombreItem">${item.categoria} ${item.nombre}</p>
                            <input class="cantidad" type="number" value=1 onchage="('change',cambiarCantidades)">
                            <p class="precioI">${item.precio}</p>
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



function calcularTotal(){
  var totales = 0;
  carrito.forEach((item) => {
    totales += item.precio ;
  });
  var carroTotal = document.createElement('p');
  carroTotal.innerText = `TOTAL $ ${totales} `
  carro.appendChild(carroTotal);
}


function quitarItem(id) {
  carrito = carrito.filter((item) => item.id !== id);

  actualizarCarrito();
}

