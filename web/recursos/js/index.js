import { tienda } from "./tienda.js";
import { renderizadoProductos } from "./funciones.js";

const contenedorProductos = document.getElementById("planes_ig");

// Crear el array para almacenar el carrito
const carrito = [];

// Función para manejar el carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  console.log("Producto agregado:", producto);
  console.log("Carrito actual:", carrito);
  actualizarCarrito(); // Actualiza la visualización del carrito
}

// Función para actualizar la visualización del carrito en el popup
function actualizarCarrito() {
  const carritoLista = document.getElementById("carritoLista");
  carritoLista.innerHTML = ""; // Limpiar la lista actual
  
  carrito.forEach((producto) => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    carritoLista.appendChild(li);
  });
}

// Función para mostrar/ocultar el carrito (popup lateral)
function mostrarCarrito() {
  const carritoPopup = document.getElementById("carritoPopup");
  carritoPopup.classList.toggle("mostrar"); // Alterna la clase 'mostrar'
}

// Función para vaciar el carrito
function vaciarCarrito() {
  carrito.length = 0; // Vaciar el array
  actualizarCarrito(); // Actualizar la visualización
}

// Asignar eventos

// Evento para el enlace del carrito
const verCarritoBtn = document.getElementById("verCarrito");
verCarritoBtn.addEventListener("click", mostrarCarrito); // Mostrar el carrito al hacer clic

// Evento para vaciar el carrito
const vaciarCarritoBtn = document.getElementById("vaciarCarrito");
vaciarCarritoBtn.addEventListener("click", vaciarCarrito); // Vaciar el carrito

// Evento para cerrar el carrito
const cerrarCarritoBtn = document.getElementById("cerrarCarrito");
cerrarCarritoBtn.addEventListener("click", mostrarCarrito); // Cerrar el carrito

// 3. Utilizar la función de renderizado
renderizadoProductos(tienda.planes, contenedorProductos, agregarAlCarrito);
