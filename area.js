function areaRectangulo() {
  altura = parseFloat(prompt("altura de el rectangulo"));
  base = parseFloat(prompt("base de el rectangulo"));
  area = base * altura;
  return console.log("el area del rectangulo es", area, "metros cuadrados");
}
areaRectangulo();
