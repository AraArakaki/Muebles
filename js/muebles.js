

// let mensaje = () => alert ("Desea suscribirse para recibir ofertas?");
// mensaje();
 
//Elemento creado desde js 
let barra= document.getElementById('top');
let parrafo = document.createElement("p");
parrafo.classList.add('pDesc')
parrafo.innerHTML= "<p>Cupon de descuento <span>DESCUENTO10</span></p>";
barra.appendChild(parrafo);


// Boton para abrir/cerrar carrito
const btnabrir = document.querySelector(".abrir");
btnabrir.onclick = () => abrirCarrito();
let abrirCarrito = () => document.getElementById("carrito").style.right = "0";

const btncerrar = document.querySelector(".cerrar");
btncerrar.onclick = () => cerrarCarrito();
let cerrarCarrito = () => document.getElementById("carrito").style.right = "-50vw";

const btnconfirmar = document.querySelector(".confirmar");
btnconfirmar.onclick = () => thxByuy();
let thxByuy = () => alert("Gracias por tu compra");


let carrito=[];

//Listado con todos los productos
const productos=[
  {id:"1", categoria:"silla ", nombre:"sahan",precio:6000, img: 'imagenes/behnam-norouzi-phXwnWWz-BM-unsplash.jpg'},
  {id:"2", categoria:"silla", nombre:"anton",precio:5000, img: 'imagenes/juan-burgos-Dp2xzrdXrNs-unsplash.jpg'},
  
  {id:"3", categoria:"mesa", nombre:"sahan",precio:6000, img: 'imagenes/nathan-oakley-OngbrOmqtzc-unsplash.jpg'},
  {id:"4", categoria:"mesa", nombre:"anton",precio:6000, img: 'imagenes/hannah-busing-nME9TubZtSo-unsplash.jpg'}, 
  
  {id:"5", categoria:"sillon", nombre:"sahan",precio:6000, img: 'imagenes/eugenivy_now-1JJJIHh7-Mk-unsplash.jpg'},  
  {id:"6", categoria:"sillon", nombre:"anton",precio:6000, img: 'imagenes/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg'},
  
  {id:"7", categoria:"espejo", nombre:"sahan",precio:6000, img: 'imagenes/milada-vigerova-pdZ2BwpLyis-unsplash.jpg'},  
  {id:"8", categoria:"espejo", nombre:"anton",precio:6000, img: 'imagenes/giorgio-trovato-EwKX1wH8Tyk-unsplash.jpg'},
  {id:"9", categoria:"deco", nombre:"anton",precio:6000, img: 'imagenes/josh-hemsley-VnYuKzrN82E-unsplash.jpg'},
  
  {id:"10", categoria:"lampara", nombre:"sahan",precio:6000, img: 'imagenes/patrick-schneider-mFnbFaCIu1I-unsplash.jpg'},
  {id:"11", categoria:"lampara", nombre:"anton",precio:6000, img: 'imagenes/joel-henry-pdIwPL3HU2s-unsplash.jpg'},
  
];



//Mostrar todos los productos
productos.forEach((producto, indice)=>{

  const contenedor= document.getElementById("galeria");
  
  let caja= document.createElement("div");

  let imagenCaja= document.createElement('img');
  imagenCaja.setAttribute('src', producto.img);
  // imagenCaja.classList.add("img")

  let nombreCaja= document.createElement('h3');
  nombreCaja.textContent=  `${producto.categoria} ${producto.nombre}`;

  let precio= document.createElement('p');
  precio.classList.add('precioCaja');
  precio.textContent= `$${producto.precio}`;

  let botonAddCarrito= document.createElement('button');
  botonAddCarrito.textContent='Agregar al Carrito';
  botonAddCarrito.classList.add('botonAddItem'); 
  botonAddCarrito.addEventListener('click', addItem);
  
  contenedor.appendChild(caja);
  caja.appendChild(imagenCaja);
  caja.appendChild(nombreCaja);
  caja.appendChild(precio);
  caja.appendChild(botonAddCarrito);
});


function addItem(evento){
  var btnAdd = evento.target;
  var comprarItem= btnAdd.parentElement
  var img= comprarItem.getElementsByTagName('img')[0].src
  var nombre=comprarItem.getElementsByTagName('h3')[0].innerText
  var precio=comprarItem.getElementsByTagName('p')[0].innerText
  agregarItemCar(img, nombre, precio);

}

function agregarItemCar(img, nombre, precio){
  var carro= document.querySelector('#cart');
  var carroItem= document.createElement('li');

  var cartItemNames = carroItem.getElementsByTagName('h3')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == nombre) {
          alert('This item is already added to the cart')
          return}
        }
      
  carroItem.innerHTML= `
                        <img class="imgCarrito" src="${img}" alt="">
                        <p class="nombreItem">${nombre}</p>
                        <button class="add">+</button>
                        <p class="cantidad">  </p>
                        <button class="less">-</button>
                        <p class="precioI">${precio}</p>
                        <button class="eliminar">✗</button>
                                                            `
  carro.appendChild(carroItem);
  carroItem.getElementsByClassName('eliminar')[0].addEventListener('click', quitarItem)
  carroItem.getElementsByClassName('cantidad')[0].addEventListener('change', cantidades)
  actualizarCarrito ()
}

var cantidadIn = document.getElementsByClassName('cantidad')
  for (var i =  0; i < cantidadIn.length; i++) {
    var input = cantidadIn[i]
    input.addEventListener('change', cantidades)
  }

function cantidades(evento) {
  var input = evento.target
  if (input==0){
    input.value = 1
  }
  actualizarCarrito ()
}



function quitarItem(evento){
  var btnclick = evento.target
  btnclick.parentElement.remove()
  
  actualizarCarrito ()
}


function actualizarCarrito (){
  var carroItem = document.getElementsByTagName('li')
  
  var total=0
  for (var i =0; i> carroItem.length; i++){
    var carroItems = carroItem[i]
    var precioItem = carroItems.document.getElementsByClassName('precioI')[0]
    var cantItem = carroItems.document.getElementsByClassName('cantidad')[0]
    var precioCarrito= parseFloat(precioItem.innerText(''))
    var cant = cantItem.value
    total= total+ (precioCarrito * cant) 
  }
  total = Math.round(total*100)/100
  document.getElementsByClassName('toti')[0].innerText= 'Total :$ '+total
}


// // Buscar categoria (Tipo de mueble) 
// let categoria= prompt("que categoria esta buscando");
// const filtroCategoria = productos.filter((productos)=> {
//   return productos.categoria === categoria
// })   


// let itemSelect= prompt("Ingrese el nombre del producto");
// const agregarItem= filtroCategoria.filter((productos)=>{
//   return filtroCategoria.nombre === itemSelect;
// })
// carrito.push(agregarItem);
// console.log(carrito);


//Suma de todos los productos del array carrito
// const total = carrito.reduce ((subtotal, producto)=>{
//   return producto.precio + subtotal
// }, 0)
// console.log(total)

// }

// //METODO DE PAGO
// let total=0;
// let metodoPago= prompt("Cual es tu metodo de pago Efectivo Debito Credito o Transeferencia Bancaria").toLowerCase();
// if (metodoPago == 'efectivo'){
//   total= (subtotal - (subtotal* 0.10))
// } else if(metodoPago == 'credito') {
//   total= (subtotal + (subtotal* 0.10));
// } else {
//   total= subtotal;
// }

// alert("su pago total en "+ metodoPago + " $ "+ total);


// //CUPON DESCUENTO
// let cupon;

// while (cupon !== "DESCUENTO10") {
//   cupon = prompt("Tiene un cupon de descuento? Ingrese su cupon");
//   if (cupon === null) {
//     alert("Su Total $" + total);

//     break;
//   } else if (cupon !== "DESCUENTO10") {
//     if (
//       confirm("no existe el cupon " + cupon)
//     ) {
//       continue;
//     } else {
//       cupon = null;
//       break;
//     }
//   } else {
//     alert("Tiene 10% de descuento \n Su nuevo Total $" + (total - ( total * 0.10)));
//     break;
//   }
// }

