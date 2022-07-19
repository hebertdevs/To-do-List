//Aqui ficara o padrão do documento salvo no nosso banco de dados
const mongoose = require("mongoose");

//schema é uma colection ou uma tabela dependendo do banco de dados
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  check: {
    type: Boolean,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

//exportando nosso arquivo de base do banco de dados
module.exports = mongoose.model("Task", taskSchema);
