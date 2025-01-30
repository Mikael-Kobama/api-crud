// config inicial
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Person = require("./models/Person");

// forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// rota inical / endpoint
app.get("/", (req, res) => {
  //mostrar req

  res.json({ message: "Oi Express" });
});

//

// entregar uma porta

const DB_USER = "kobamamikael";
const DB_PASSWORD = encodeURIComponent("RVTqPVl1ZPwCWW23");

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster-api.gx68q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-api`
  )
  .then(() => {
    console.log("Conectamos");
    app.listen(3000);
  })
  .catch((err) => console.log("Error", err));
