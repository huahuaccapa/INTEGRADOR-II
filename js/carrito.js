let carritoLanding = [];

function cargarCarritoLanding() {
  carritoLanding = JSON.parse(localStorage.getItem("carritoLanding")) || [];
}

function guardarCarritoLanding() {
  localStorage.setItem("carritoLanding", JSON.stringify(carritoLanding));
}

function renderCarritoLanding() {
  const contenedor = document.getElementById("landingCartItems");

  if (!contenedor) return;

  if (carritoLanding.length === 0) {
    contenedor.innerHTML = `<p class="empty-text">No hay productos agregados al carrito.</p>`;
    actualizarTotalesLanding();
    return;
  }

  contenedor.innerHTML = "";

  carritoLanding.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "landing-cart-item";

    div.innerHTML = `
      <div>
        <strong>${item.nombre}</strong>
        <p>Color: ${item.color} | Talla: ${item.talla}</p>
        <p>Cantidad: ${item.cantidad}</p>
        <p>S/ ${(item.precio * item.cantidad).toFixed(2)}</p>
      </div>
      <button class="btn-secondary" onclick="eliminarItemLanding(${index})">Quitar</button>
    `;

    contenedor.appendChild(div);
  });

  actualizarTotalesLanding();
}

function eliminarItemLanding(index) {
  carritoLanding.splice(index, 1);
  guardarCarritoLanding();
  renderCarritoLanding();
}

function actualizarTotalesLanding() {
  const subtotal = carritoLanding.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  const igv = subtotal * 0.18;
  const total = subtotal + igv;

  document.getElementById("landingSubtotal").textContent = subtotal.toFixed(2);
  document.getElementById("landingIgv").textContent = igv.toFixed(2);
  document.getElementById("landingTotal").textContent = total.toFixed(2);
}

function finalizarCompraLanding() {
  const mensaje = document.getElementById("landingMessage");

  if (carritoLanding.length === 0) {
    mensaje.textContent = "Agrega al menos un producto para finalizar la compra.";
    mensaje.style.color = "red";
    return;
  }

  mensaje.textContent = "Compra simulada realizada correctamente.";
  mensaje.style.color = "green";

  carritoLanding = [];
  guardarCarritoLanding();
  renderCarritoLanding();
}

window.onload = function () {
  cargarCarritoLanding();
  renderCarritoLanding();
};