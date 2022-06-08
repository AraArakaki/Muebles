


// let mensaje = () => alert ("Desea suscribirse para recibir ofertas?");
// mensaje();
 
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

//Fetch porductos de archivo json
//  fetch('js/productos.json')
//  .then(res=>res.json())
//  .then(json => catalogo(json))

 fetch('js/productos.json')
  .then((response) => response.json())
  .then(mostrarCatalogo);

//Mostrar todos los productos
function mostrarCatalogo(data){

    data.forEach((producto)=>{
      const contenedor= document.getElementById("galeria");

      let caja= document.createElement("div");
      caja.classList.add('card');
    
      let imagenCaja= document.createElement('img');
      imagenCaja.setAttribute('src', producto.img);

      let like = document.createElement('img');
      like.classList.add('wishlist');
      like.src="imagenes/icons8-heart-24.png";
      // like.addEventListener('click', addWishList);

      let nombreCaja = document.createElement('h3');
      nombreCaja.textContent =`${producto.categoria} ${producto.nombre}`;

      let precio = document.createElement('p');
      precio.textContent = `$${producto.precio}`;
      precio.classList.add('precioCard')
    
      let botonAddCarrito = document.createElement('button');
      botonAddCarrito.textContent = 'Agregar al Carrito';
      botonAddCarrito.setAttribute('marcador', producto.id);
      botonAddCarrito.classList.add('botonAddItem'); 
      botonAddCarrito.addEventListener('click', AgregarCarrito);
      botonAddCarrito.addEventListener('click', () => {
        Toastify({
          text:`${producto.categoria} ${producto.nombre}`+' agregado al carrito',
          duration: 3000,
          position:'right',
          style:{background:'rgb(235, 149, 202)'}
        }).showToast()
      })
      contenedor.appendChild(caja);
      caja.appendChild(imagenCaja);
      caja.appendChild(like);
      caja.appendChild(botonAddCarrito);
      caja.appendChild(nombreCaja);
      caja.appendChild(precio);
    });

}
mostrarCatalogo();


let carrito = JSON.parse(localStorage.getItem("CARRO")) || [];

function AgregarCarrito(evento){
  carrito.push(evento.target.getAttribute('marcador'))
  localStorage.setItem("CARRO", JSON.stringify(carrito));
  mostrarCarritoItems();
}

let total = 0;
var carro = document.querySelector('#cart');

function mostrarCarritoItems(){
  carro.textContent = '';
    const cart = [...new Set(carrito)]
    cart.forEach((mueble)=>{
      const muebleS = data.filter((muebleProductos)=>{
        return muebleProductos.id === parseInt(mueble);
      });
      const cantidad = carrito.reduce((total, muebleId)=>{
        return muebleId === mueble ? total += 1 : total;
      },0);
      const carroItem = document.createElement('li');
      carroItem.innerHTML=
                            `<img class="imgCarrito" src="${muebleS[0].img}" alt="">
                            <p class="nombreItem">${muebleS[0].categoria} ${muebleS[0].nombre}</p>
                            <input class="cantidad" type="number" value="${cantidad}">
                            <p class="precioI">${muebleS[0].precio}</p>
                            <button class="eliminar">✗</button>`;
  
  const btnCant = carroItem.getElementsByClassName('cantidad')[0];
  btnCant.addEventListener('click', cambiarCantidades);
  
  const btnX = carroItem.getElementsByClassName('eliminar')[0];
  btnX.addEventListener('click', quitarItem);   
  btnX.dataset.m = mueble;

  carroItem.appendChild(btnX);
  carro.appendChild(carroItem);
  cantidadTotal = carrito.length
  
  });
  carritoVacio = document.createElement("p");
  carro.appendChild(carritoVacio);
  carrito.length === 0  && (carritoVacio.innerText = ("El carrito esta vacio"));
  
  carroTotal= document.createElement('p');
  carro.appendChild(carroTotal); 
  carroTotal.innerText = `TOTAL  $ ${calcularTotal()} (items ${cantidadTotal})` 

  const cantCarrito = document.getElementById('shopCart');
  cantCarrito.innerText = "(" + cantidadTotal + ")";
}
mostrarCarritoItems();


function quitarItem(evento){
  const id = evento.target.dataset.m;
  carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
  });
  mostrarCarritoItems();
}

// function cambiarCantidades(evento){
//   var input = evento.target
//   if(isNaN(input.value)|| input.value <=0){
//     input.value = 2;
//   }
// mostrarCarritoItems()
// }
let cantidad = 0;
function cambiarCantidades (evento){
  cantidad = evento.target
  if (cantidad == 1){
    cantidad++
  }
}
mostrarCarritoItems()

function calcularTotal(){
  return carrito.reduce((total, mueble)=>{
    const muebles = productos.filter((muebleProductos)=>{
      return muebleProductos.id === parseInt(mueble);
    });
    return total + muebles[0].precio;
  },0).toFixed (2);
}
// //CUPON DESCUENTO
function cupon(){
  let cupon= document.getElementById("cupon")
  cupon.value == "descuento10"?  total - ( total * 0.10): alert("No existe el cupon "+ cupon.value)  
}
document.getElementById("btnDescuento").addEventListener('click', cupon);




// // Buscar categoria (Tipo de mueble) 
// let categoria= prompt("que categoria esta buscando");
// const filtroCategoria = productos.filter((productos)=> {
//   return productos.categoria === categoria
// })


 


