function arr() {
  a = [
    "horacio",
    "oran",
    "chaqueño",
    "chalchaleros",
    "ysy",
    "lucho",
    "neo",
    "guarani",
    "mercedes",
    "tito",
  ];
  console.log(a[2], a[3], a[6]);
  a[2] = "salteños";
  a[3] = "chucaro";
  console.log(a);
  a.push("calderon");
  console.log(a);
  console.log(a.length);
  a.sort();
  console.log(a);
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
}
arr();
