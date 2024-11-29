function calcularPrecioConDescuento() {
  precioOriginal = parseFloat(prompt("precio de el producto"));
  descuento = parseFloat(prompt("porcentaje de descuento"));
  pd = (precioOriginal * descuento) / 100;
  pf = precioOriginal - pd;
  return console.log(pf);
}
calcularPrecioConDescuento();
