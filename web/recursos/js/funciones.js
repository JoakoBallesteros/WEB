export function renderizadoProductos(planes, contenedor) {
  // Inicializar la variable acumuladora
  let planHTML = "";

  // Recorrer cada plan y generar su HTML
  planes.forEach((plan) => {
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
                  </li>
              </ul>
          </div>
      </article>
      `;
  });

 
  contenedor.innerHTML = planHTML;
}
