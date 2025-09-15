const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./database");
const Producto = require("./Models/Modelo");
const Venta = require("./Models/Modelo_Venta");

const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Vistas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Ruta inicial
app.get("/hola", (req, res) => {
  res.render("index"); // muestra formulario
});

app.get("/input_product", (req, res) => {
  res.render("input_product"); // formulario
});

// Ruta para guardar producto
app.post("/input_product", async (req, res) => {
  try {
    const { Tipo, Descripcion, stock, Precio } = req.body;
    await Producto.create({ Tipo, Descripcion, stock: parseInt(stock), 
  Precio: parseFloat(Precio) });
    res.redirect("/productos");
  } catch (error) {
    res.status(500).send("Error al guardar producto: " + error.message);
  }
});

// Mostrar todos los productos
app.get("/productos", async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.render("productos", { productos });
  } catch (error) {
    res.status(500).send("Error al obtener productos: " + error.message);
  }
});

// Mostrar todas las ventas
app.get("/ventas", async (req, res) => {
  try {
    const ventas = await Venta.findAll();
    res.render("ventas", { ventas });
  } catch (error) {
    res.status(500).send("Error al obtener ventas: " + error.message);
  }
});

// Iniciar servidor
app.listen(3000, async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado a SQL Server");
    console.log("Servidor corriendo en http://localhost:3000");
  } catch (error) {
    console.error(" Error al conectar con SQL Server:", error);
  }
});
