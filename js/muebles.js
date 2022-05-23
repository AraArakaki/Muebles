

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
let cerrarCarrito = () => document.getElementById("carrito").style.right = "-50vw";

const btnconfirmar = document.querySelector(".confirmar");
btnconfirmar.onclick = () => thxByuy();
let thxByuy = () => alert("Gracias por tu compra");


const btnVaciar= document.getElementById('vaciar');
btnVaciar.onclick = () => vaciarCarrito();

let vaciarCarrito = () => {
  carrito = [];
  mostrarCarritoItems();
}


//Listado con todos los productos
const productos=[
  {id:1, categoria:"silla ", nombre:"sahan",precio:6000, img: 'imagenes/behnam-norouzi-phXwnWWz-BM-unsplash.jpg'},
  {id:2, categoria:"silla", nombre:"anton",precio:5000, img: 'imagenes/juan-burgos-Dp2xzrdXrNs-unsplash.jpg'},
  {id:3, categoria:"mesa", nombre:"sahan",precio:6000, img: 'imagenes/nathan-oakley-OngbrOmqtzc-unsplash.jpg'},
  {id:4, categoria:"mesa", nombre:"anton",precio:6000, img: 'imagenes/hannah-busing-nME9TubZtSo-unsplash.jpg'}, 
  {id:5, categoria:"sillon", nombre:"sahan",precio:6000, img: 'imagenes/eugenivy_now-1JJJIHh7-Mk-unsplash.jpg'},  
  {id:6, categoria:"sillon", nombre:"anton",precio:6000, img: 'imagenes/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg'},
  {id:7, categoria:"espejo", nombre:"sahan",precio:6000, img: 'imagenes/milada-vigerova-pdZ2BwpLyis-unsplash.jpg'},  
  {id:8, categoria:"espejo", nombre:"anton",precio:6000, img: 'imagenes/giorgio-trovato-EwKX1wH8Tyk-unsplash.jpg'},
  {id:9, categoria:"deco", nombre:"anton",precio:6000, img: 'imagenes/josh-hemsley-VnYuKzrN82E-unsplash.jpg'},
  {id:10, categoria:"lampara", nombre:"sahan",precio:6000, img: 'imagenes/patrick-schneider-mFnbFaCIu1I-unsplash.jpg'},
  {id:11, categoria:"lampara", nombre:"anton",precio:6000, img: 'imagenes/joel-henry-pdIwPL3HU2s-unsplash.jpg'},

];

//Mostrar todos los productos
function mostrarProductos(){
  productos.forEach((producto)=>{

    const contenedor= document.getElementById("galeria");
    
    let caja= document.createElement("div");
  
    let imagenCaja= document.createElement('img');
    imagenCaja.setAttribute('src', producto.img);
    // imagenCaja.classList.add("img")
  
    let nombreCaja= document.createElement('h3');
    nombreCaja.textContent=`${producto.categoria} ${producto.nombre}`;
  
    let precio= document.createElement('p');
    precio.textContent= `$${producto.precio}`;
  
    let botonAddCarrito= document.createElement('button');
    botonAddCarrito.textContent='Agregar al Carrito';
    botonAddCarrito.setAttribute('marcador', producto.id);
    botonAddCarrito.classList.add('botonAddItem'); 
    botonAddCarrito.addEventListener('click', AgregarCarrito);
    
    contenedor.appendChild(caja);
    caja.appendChild(imagenCaja);
    caja.appendChild(nombreCaja);
    caja.appendChild(precio);
    caja.appendChild(botonAddCarrito);
  });
}
mostrarProductos();

let carrito = JSON.parse(localStorage.getItem("CARRO")) || [];

function AgregarCarrito(evento){
  carrito.push(evento.target.getAttribute('marcador'))
  localStorage.setItem("CARRO", JSON.stringify(carrito));
  mostrarCarritoItems();
}

let total= 0;
var carro = document.querySelector('#cart');

function mostrarCarritoItems(){
  carro.textContent= '';
    const cart = [...new Set(carrito)]
    cart.forEach((mueble)=>{
      const muebleS = productos.filter((muebleProductos)=>{
        return muebleProductos.id === parseInt(mueble);
      });
      const cantidad= carrito.reduce((total, muebleId)=>{
        return muebleId === mueble ? total += 1 : total;
      },0);
      const carroItem = document.createElement('li');
      carroItem.innerHTML=
                            `<img class="imgCarrito" src="${muebleS[0].img}" alt="">
                            <p class="nombreItem">${muebleS[0].categoria} ${muebleS[0].nombre}</p>
                            <input class="cantidad" type="number" value="${cantidad}">
                            <p class="precioI">${muebleS[0].precio}</p>
                            <button class="eliminar">✗</button>`;
  
  const btnX = carroItem.getElementsByClassName('eliminar')[0];
  btnX.addEventListener('click', quitarItem);   
  btnX.dataset.m= mueble;
  carroItem.appendChild(btnX);


  carro.appendChild(carroItem);
  });

  carritoVacio = document.createElement("p");
  carro.appendChild(carritoVacio);
  carrito.length === 0  && (carritoVacio.innerText = ("El carrito esta vacio"));
  
  carroTotal= document.createElement('p');
  carro.appendChild(carroTotal);                                                 
  carroTotal.innerText = "TOTAL $ "+ calcularTotal();
}

mostrarCarritoItems();



function quitarItem(evento){
  const id = evento.target.dataset.m;
  carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
  });
  mostrarCarritoItems();
}


 
function calcularTotal(){
  return carrito.reduce((total, mueble)=>{
    const muebles = productos.filter((muebleProductos)=>{
      return muebleProductos.id === parseInt(mueble);
    });
    return total + muebles[0].precio;
  },0).toFixed (2);
}






