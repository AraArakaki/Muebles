
// let nombreUsuario = prompt('Ingrese su nombre').toUpperCase();

// function mensaje() {
//   let mensaje = 'Hola, ' + nombreUsuario;
//   alert(mensaje);
// }
//  mensaje(); 
 
class Mueble {
    constructor(prod) {
        this.categoria = productos.categoria;
        this.nombre = productos.nombre;
        this.precio = productos.precio;
    }
} 
const carrito=[];

//Listado con todos los productos
const productos=[
  {categoria:"silla", nombre:"sahan",precio:6000},
  {categoria:"silla", nombre:"anton",precio:5000},
  {categoria:"silla", nombre:"bizet",precio:4000},
  {categoria:"silla", nombre:"belio",precio:3000},
  {categoria:"silla", nombre:"suria",precio:2000},

  {categoria:"mesa", nombre:"sahan",precio:6000},
  {categoria:"mesa", nombre:"anton",precio:5000},
  {categoria:"mesa", nombre:"bizet",precio:4000},
  {categoria:"mesa", nombre:"belio",precio:3000},
  {categoria:"mesa", nombre:"suria",precio:2000},

  {categoria:"cama", nombre:"sahan",precio:6000},
  {categoria:"cama", nombre:"anton",precio:5000},
  {categoria:"cama", nombre:"bizet",precio:4000},
  {categoria:"cama", nombre:"belio",precio:3000},
  {categoria:"cama", nombre:"suria",precio:2000},

  {categoria:"sillon", nombre:"sahan",precio:6000},
  {categoria:"sillon", nombre:"anton",precio:5000},
  {categoria:"sillon", nombre:"bizet",precio:4000},
  {categoria:"sillon", nombre:"belio",precio:3000},
  {categoria:"sillon", nombre:"suria",precio:2000},

  {categoria:"lampara", nombre:"sahan",precio:6000},
  {categoria:"lampara", nombre:"anton",precio:5000},
  {categoria:"lampara", nombre:"bizet",precio:4000},
  {categoria:"lampara", nombre:"belio",precio:3000},
  {categoria:"lampara", nombre:"suria",precio:2000},
];

// // Muestra el listado total de productos
productos.forEach((prod)=>{
  console.log(prod.categoria+" "+prod.nombre+ " $ "+prod.precio)
});


// Buscar categoria (Tipo de mueble) 
let categoria= prompt("que categoria esta buscando");
const filtroCategoria = productos.filter((productos)=> {
  return productos.categoria === categoria
})
console.log(filtroCategoria);

// Buscar (para search bar)
// let item = prompt("Busqueda");
// const busqueda = productos.filter((productos)=> {
//   return productos.categoria=== item ||productos.nombre=== item
// })
// console.log(busqueda);

   
let itemSelect= prompt("Ingrese el nombre del producto");
const agregarItem= filtroCategoria.filter((productos)=>{
  return filtroCategoria.nombre === itemSelect;
})
carrito.push(agregarItem);
console.log(carrito);

//Suma de todos los productos del array carrito
const total = carrito.reduce ((subtotal, producto)=>{
  return producto.precio + subtotal
}, 0)
console.log(total)

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


// Eventos
// let boton =
// document.getElementById("carrito")
//   boton.onclick = () => {$("carrito").style.right='0'};

  
function abrirCarrito() {
  document.getElementById("carrito").style.right = "0";
}

function cerrarCarrito() {
  document.getElementById("carrito").style.right = "-70vw";
}