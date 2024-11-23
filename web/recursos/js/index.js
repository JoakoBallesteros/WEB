import { tienda } from "./tienda.js";


import { renderizadoProductos } from "./funciones.js";

const contenedorProductos = document.getElementById('planes_ig');

// 4 - Utilizar la función de renderizado

renderizadoProductos(tienda.planes, contenedorProductos);