const router = require("express").Router();

const Person = require("../models/Person");

// rotas

// Create

router.post("/", async (req, res) => {
  // req.body

  // { name: "Mikael", salary: 5000, aproved: false}
  const { name, salary, approved } = req.body;

  const person = {
    name,
    salary,
    approved,
  };

  if (!name) {
    res.status(422).json({ error: "O nome é obrigatório" });
  }

  // create

  try {
    //criando dados
    await Person.create(person);

    res.status(201).json({ message: "Pessoa criada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Read

router.get("/", async (req, res) => {
  try {
    const people = await Person.find();

    res.status(200).json(people);
  } catch (error) {}
});

module.exports = router;
