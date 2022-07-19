//Controle são metodos da rota separados

const Task = require("../models/Task"); // importamos nosso arquivo task que foi criado

// definimos entao como as task serão inseridas na nossa pagina
const getAllTasks = async (req, res) => {
  try {
    const tasksList = await Task.find();
    return res.render("index", { tasksList });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createTask = async (req, res) => {
  const task = req.body;

  if (!task) {
    return res.redirect("/");
  }

  try {
    await Task.create(task);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

//exportando nossos metodos de rotas como modulos
module.exports = {
  getAllTasks,
  createTask,
};
