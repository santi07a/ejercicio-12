const urlFacturas = "http://localhost:3001/facturas";
const listado = document.querySelector(".lista-facturas");
let facturas;

const apiFacturas = async () => {
  const respuesta = await fetch(urlFacturas);
  facturas = await respuesta.json();

  const facturasIngreso = facturas
    .filter(factura => factura.tipo === "ingreso");
  console.log(facturasIngreso);
  for (const factura of facturasIngreso) {
    const nuevaFila = document.querySelector(".dummy").cloneNode(true);
    nuevaFila.classList.remove("dummy");
    nuevaFila.hidden = false;
    nuevaFila.querySelector(".numero-factura").textContent = factura.numero;
    nuevaFila.querySelector(".fecha-factura").textContent =
      luxon.DateTime.fromMillis(+factura.fecha).setLocale("es").toLocaleString();
    nuevaFila.querySelector(".aplicacion").textContent = factura.concepto;
    nuevaFila.querySelector(".monto-base").textContent = `${factura.base} €`;
    const extraIva = factura.base * factura.tipoIva / 100;
    nuevaFila.querySelector(".monto-iva").textContent = `${extraIva}€ (${factura.tipoIva}%)`;
    nuevaFila.querySelector(".monto-total").textContent = `${factura.base + extraIva} €`;
    nuevaFila.querySelector(".estado-factura").textContent = 0;
    nuevaFila.querySelector(".factura-vence").textContent =
      luxon.DateTime.fromMillis(+factura.vencimiento).setLocale("es").toLocaleString();

    listado.append(nuevaFila);
  }
};
apiFacturas();
