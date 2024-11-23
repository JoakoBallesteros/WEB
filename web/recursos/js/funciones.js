export function renderizadoProductos(planes, contenedor) {
    // Escribir la lógica

    let planHTML = "";

    planes.forEach((plan) => {

        productoHTML += `
        <article
         class="plan__instagram">
            <div>
                  <ul>
                    <li>
                             <h3>${planes.nombre}</h3>
                             <p> ${planes.descripcion}</p>
                            <img
                            src="${planes.imagen}"
                            alt="${planes.nombre  }"
                            />
                            
                            <data  value="precio" type="number">
                            precio $${planes.precio}</data>
                    </li>
                </ul>
            </div>
            
            
            </article>

        `;
        
          }
        )
        contenedor.innerHTML += planHTML;};