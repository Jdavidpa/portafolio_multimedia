const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/categorias", (req, res) => {
  let categorias = [
    { name: "C.naturales", descripcion: "ecosistema" },
    { name: "Matematicas", descripcion: "", age: 32 }
  ];
  res.send(users);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
