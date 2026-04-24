// reportes

function renderReportes() {
  const ventasCompletadas = ventas.filter(venta => venta.estado === "completada");
  const ventasAnuladas = ventas.filter(venta => venta.estado === "anulada");

  document.getElementById("reporteVentasCompletadas").textContent = ventasCompletadas.length;
  document.getElementById("reporteVentasAnuladas").textContent = ventasAnuladas.length;

  const totalVendido = ventasCompletadas.reduce((acc, venta) => acc + venta.total, 0);
  document.getElementById("reporteTotalVendido").textContent = `S/ ${totalVendido.toFixed(2)}`;

  const totalProductosVendidos = ventasCompletadas.reduce((acc, venta) => {
    return acc + venta.items.reduce((sum, item) => sum + item.cantidad, 0);
  }, 0);
  document.getElementById("reporteTotalProductosVendidos").textContent = totalProductosVendidos;

  document.getElementById("reporteProductoTop").textContent = obtenerTopPorCampo("nombre");
  document.getElementById("reporteColorTop").textContent = obtenerTopPorCampo("color");
  document.getElementById("reporteTallaTop").textContent = obtenerTopPorCampo("talla");
  document.getElementById("reportePagoTop").textContent = obtenerMetodoPagoTop();

  renderAlertasInventarioReporte();
}


function obtenerTopPorCampo(campo) {
  const contador = {};

  ventas
    .filter(venta => venta.estado === "completada")
    .forEach(venta => {
      venta.items.forEach(item => {
        const clave = item[campo];
        if (!contador[clave]) {
          contador[clave] = 0;
        }
        contador[clave] += item.cantidad;
      });
    });

  const entries = Object.entries(contador);

  if (entries.length === 0) return "Sin datos disponibles.";

  const top = entries.reduce((max, actual) => actual[1] > max[1] ? actual : max);
  return `${top[0]} (${top[1]} vendidos)`;
}

function obtenerMetodoPagoTop() {
  const contador = {};

  ventas
    .filter(venta => venta.estado === "completada")
    .forEach(venta => {
      if (!contador[venta.metodoPago]) {
        contador[venta.metodoPago] = 0;
      }
      contador[venta.metodoPago] += 1;
    });

  const entries = Object.entries(contador);

  if (entries.length === 0) return "Sin datos disponibles.";

  const top = entries.reduce((max, actual) => actual[1] > max[1] ? actual : max);
  return `${top[0]} (${top[1]} ventas)`;
}

function renderAlertasInventarioReporte() {
  const contenedor = document.getElementById("reporteAlertasInventario");
  if (!contenedor) return;

  const stockBajo = productos.filter(
    producto => producto.estado === "activo" && producto.stock > 0 && producto.stock <= 5
  );

  const sinStock = productos.filter(
    producto => producto.estado === "activo" && producto.stock === 0
  );

  let alertas = [];

  stockBajo.forEach(producto => {
    alertas.push(`
      <div class="product-item">
        <div>
          <h4>Stock bajo</h4>
          <p>${producto.nombre} - ${producto.color} - ${producto.talla}</p>
        </div>
        <strong>${producto.stock} und.</strong>
      </div>
    `);
  });

  sinStock.forEach(producto => {
    alertas.push(`
      <div class="product-item">
        <div>
          <h4>Sin stock</h4>
          <p>${producto.nombre} - ${producto.color} - ${producto.talla}</p>
        </div>
        <strong>0 und.</strong>
      </div>
    `);
  });

  if (alertas.length === 0) {
    contenedor.innerHTML = `<p class="empty-cart">No hay alertas disponibles.</p>`;
    return;
  }

  contenedor.innerHTML = alertas.slice(0, 6).join("");
}