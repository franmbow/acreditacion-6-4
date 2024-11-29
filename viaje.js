function viaje() {
  e = parseFloat(prompt("precio de entretenimiento"));
  a = parseFloat(prompt("precio de alimentacion"));
  b = parseFloat(prompt("precio de alojamiento"));
  c = e + a + b;
  return console.log("el costo del viaje es", c);
}
viaje();
