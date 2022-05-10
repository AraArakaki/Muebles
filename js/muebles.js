
// let nombreUsuario = prompt('Ingrese su nombre').toUpperCase();

// function mensaje() {
//   let mensaje = 'Hola, ' + nombreUsuario;
//   alert(mensaje);
// }
//  mensaje(); 
 

let carrito=[];

//Listado con todos los productos
const productos=[
  {id:"1", categoria:"silla ", nombre:"sahan",precio:6000, img: 'imagenes/daniil-silantev-1P6AnKDw6S8-unsplash.jpg'},
  {id:"2", categoria:"silla", nombre:"anton",precio:5000, img: 'imagenes/juan-burgos-Dp2xzrdXrNs-unsplash.jpg'},
  
  {id:"3", categoria:"mesa", nombre:"sahan",precio:6000, img: 'imagenes/nathan-oakley-OngbrOmqtzc-unsplash.jpg'},
  {id:"3", categoria:"mesa", nombre:"anton",precio:6000, img: 'imagenes/hannah-busing-nME9TubZtSo-unsplash.jpg'}, 
  
  {id:"3", categoria:"sillon", nombre:"sahan",precio:6000, img: 'imagenes/eugenivy_now-1JJJIHh7-Mk-unsplash.jpg'},  
  {id:"3", categoria:"sillon", nombre:"anton",precio:6000, img: 'imagenes/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg'},
  
  {id:"3", categoria:"lampara", nombre:"sahan",precio:6000, img: 'imagenes/hal-gatewood-Vfml26Iy4mI-unsplash.jpg'},  
  {id:"3", categoria:"lampara", nombre:"anton",precio:6000, img: 'imagenes/hal-gatewood-Vfml26Iy4mI-unsplash.jpg'},
  
  {id:"3", categoria:"otros", nombre:"sahan",precio:6000, img: 'imagenes/benjamin-voros-X63FTIZFbZo-unsplash.jpg'},
  {id:"3", categoria:"otros", nombre:"anton",precio:6000, img: 'imagenes/hal-gatewood-Vfml26Iy4mI-unsplash.jpg'},
  
];

// Muestra el listado total de productos
// productos.forEach((prod)=>{
//   console.log(prod.categoria+" "+prod.nombre+ " $ "+prod.precio)
// });


// // Buscar categoria (Tipo de mueble) 
// let categoria= prompt("que categoria esta buscando");
// const filtroCategoria = productos.filter((productos)=> {
//   return productos.categoria === categoria
// })
// console.log(filtroCategoria);

// Buscar (para search bar)
// let item = prompt("Busqueda");
// const busqueda = productos.filter((productos)=> {
//   return productos.categoria=== item ||productos.nombre=== item
// })
// console.log(busqueda);


// let itemSelect= prompt("Ingrese el nombre del producto");
// const agregarItem= filtroCategoria.filter((productos)=>{
//   return filtroCategoria.nombre === itemSelect;
// })
// carrito.push(agregarItem);
// alert(carrito);


//Suma de todos los productos del array carrito
// const total = carrito.reduce ((subtotal, producto)=>{
//   return producto.precio + subtotal
// }, 0)
// console.log(total)

// let subtotal=0;
// // //Agregar otro item
// let salir = "";
// while (salir != "si") { 
//   var otroProducto = prompt("Desea ingresar otro item? si / no");

//   if (otroProducto == 'si'){
//     buscar();
//   } else{
//     alert ("Subtotal: $" + subtotal);
//     break;
//   }

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

// while (cupon !== "descuento10") {
//   cupon = prompt("Tiene un cupon de descuento? Ingrese su cupon");
//   if (cupon === null) {
//     alert("Su Total $" + total);

//     break;
//   } else if (cupon !== "descuento10") {
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

// // //FINALIZAR COMPRA
// alert(nombreUsuario +' muchas gracias por tu compra');


// DOM
for (const producto of productos){
 
  let contenedor = document.getElementById("galeria");
  let item= document.createElement ("div");
  let itemImagen= document.createElement('img');
  itemImagen.setAttribute('src',producto.img);
  item.innerHTML = `    
                    <h3> ${producto.categoria} ${producto.nombre} </h3>
                    <p> $ ${producto.precio}</p>
                    <button>agregar al carrito</button>`;
  item.appendChild(itemImagen);
  contenedor.appendChild(item);
}

let parrafo = document.createElement("p");
parrafo.innerHTML= "<p>cupon de descuento 10% <b>descuento10</b></p>";
document.body.append(parrafo);

// Eventos

const btnabrir = document.querySelector(".abrir");
btnabrir.onclick = function() {abrirCarrito()};
function abrirCarrito() {
  document.getElementById("carrito").style.right = "0";
}

const btncerrar = document.querySelector(".cerrar");
btncerrar.onclick = function() {cerrarCarrito()};
function cerrarCarrito() {
  document.getElementById("carrito").style.right = "-70vw";

}


