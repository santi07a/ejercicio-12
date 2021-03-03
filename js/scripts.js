const urlFacturas = "http://localhost:3001/facturas";

let facturas;
const apiFacturas = async () => {
  const respuesta = await fetch(urlFacturas);
  facturas = await respuesta.json();
  console.log("recibida la factura", facturas);
};

apiFacturas();
