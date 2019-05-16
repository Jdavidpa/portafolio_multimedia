const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("BIENVENIDO A TU PORTAFOLIO MULTIMEDIA");
});

app.get("/categorias", (req, res) => {
  let categorias = [
    { idCategoria: "10", name: "C.naturales", descripcion: "ecosistema" },
    { idCategoria: "20", name: "Matematicas", descripcion: "polinomios" }
  ];
  res.send(categorias);
});

app.get("/usuarios", (req, res) => {
  let usuarios = [
    { idUsuario: "001", name: "Pedro", apellido: "Martinez" , email: "martinemar@gmail.com" , telefono: "3234531232" , contreaseña: "32345", idGrdao: "2"},
    { idUsuario: "002", name: "Ana", apellido: "Gomez" , email: "anag12@gmail.com" , telefono: "3233231132" , contreaseña: "14545", idGrado: "1"},
  ];
  res.send(usuarios);
});

app.get("/producto_multimedia", (req, res) => {
  let producto_multimedia = [
    { name: "infografia", descripcion: "infografia sobre ecosistema" , fecha_creacion: "15/05/2019" , idUsuario: "001" , idCategoria: "10"},
    { name: "video", descripcion: "video sobre polinomios" , fecha_creacion: "12/04/2019" , idUsuario: "002" , idCategoria: "20"},
  ];
  res.send(producto_multimedia);
});

app.get("/grado", (req, res) => {
  let grado = [
    { idGrado: "1", name: "9°", descripcion: "el grado consta de 15 mujeres y 12 varones" },
    { idGrado: "2", name: "10°", adescripcion: "el grado consta de 12 mujeres y 20 varones" },
  ];
  res.send(grado);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
