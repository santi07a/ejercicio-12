const urlFacturas = "http://localhost:3001/facturas";
const listado = document.querySelector(".lista-facturas");
let facturas;

const apiFacturas = async () => {
  const respuesta = await fetch(urlFacturas);
  facturas = await respuesta.json();
  const nuevaFila = document.querySelector(".dummy").cloneNode(true);
  nuevaFila.classList.remove("dummy");
  nuevaFila.hidden = false;
  const facturasIngreso = facturas
    .filter(factura => factura.tipo === "ingreso");
  console.log(facturasIngreso);
  for (const factura of facturasIngreso) {
    nuevaFila.querySelector(".numero-factura").textContent = factura.numero;
    nuevaFila.querySelector(".fecha-factura").textContent = factura.fecha;
    nuevaFila.querySelector(".aplicacion").textContent = factura.concepto;
    nuevaFila.querySelector(".monto-base").textContent = factura.base;
    nuevaFila.querySelector(".monto-iva").textContent = calculaIva(factura.base);
    nuevaFila.querySelector(".monto-total").textContent = factura.base + calculaIva(factura.base);
    nuevaFila.querySelector(".estado-factura").textContent = 0;
    nuevaFila.querySelector(".factura-vence").textContent = 0;

    listado.append(nuevaFila);
  }
};
apiFacturas();

const calculaIva = numero => (numero * 21) / 100;
