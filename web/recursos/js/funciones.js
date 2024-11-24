export function renderizadoProductos(planes, contenedor, agregarAlCarritoCallback) {
    // Inicializar la variable acumuladora
    let planHTML = "";
  
    // Recorrer cada plan y generar su HTML
    planes.forEach((plan, index) => {
      planHTML += `
        <article class="instagram">
          <div>
            <ul>
              <li>
                <h3>${plan.nombre}</h3>
                <p>${plan.descripcion}</p>
                <img src="${plan.imagen}" alt="${plan.nombre}" />
                <data value="${plan.precio}" type="number">
                  Precio: $${plan.precio}
                </data>
                <!-- Radiobutton para seleccionar el plan -->
                
                <!-- Botón para agregar al carrito -->
                <button class="add-to-cart" data-id="${plan.id}" data-nombre="${plan.nombre}" data-precio="${plan.precio}">
                  Agregar al carrito
                </button>
              </li>
            </ul>
          </div>
        </article>
      `;
    });
  
    // Insertar el HTML en el contenedor
    contenedor.innerHTML = planHTML;
  
    // Agregar eventos a los botones "Agregar al carrito"
    const botones = contenedor.querySelectorAll(".add-to-cart");
    botones.forEach((boton) => {
      boton.addEventListener("click", () => {
        // Obtener los datos del producto desde el botón
        const id = boton.dataset.id;
        const nombre = boton.dataset.nombre;
        const precio = parseFloat(boton.dataset.precio);
  
        // Llamar al callback para manejar el carrito
        agregarAlCarritoCallback({ id, nombre, precio });
      });
    });
  }
  
  