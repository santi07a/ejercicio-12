const urlFacturas = "http://localhost:3001/facturas";
const numeroFactura = document.querySelector(".numero-factura");
const fechaFactura = document.querySelector(".fecha-factura");
const aplicacion = document.querySelector(".aplicacion");
const montoBase = document.querySelector(".monto-base");
const montoIva = document.querySelector(".monto-iva");
const montoTotal = document.querySelector(".monto-total");
const estadoFactura = document.querySelector(".estado-factura");
const facturaVence = document.querySelector(".factura-vence");

let facturas;

const apiFacturas = async () => {
  const respuesta = await fetch(urlFacturas);
  facturas = await respuesta.json();
};
apiFacturas();
