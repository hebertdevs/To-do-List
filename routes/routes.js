//Aqui vamos importar nossos metodos criados no TaskController
const routes = require("express").Router(); // metodo do express que usamos para criar nossas rotas
const TaskController = require("../controller/TaskController"); // variavel que ira importar os metodos que criamos no arquivo taskController

//usamos o .get em routes e repassamos como parametro o nome da rota, e o metodo
routes.get("/", TaskController.getAllTasks); //agora passamos qual metodo que criamos no taskController queremos usar
routes.post("/create", TaskController.createTask); // usando como .post as task criadas no nosso arquivo taskcontroller para enviar pro nosso banco de dados

//agora so precisamos exportar nossas rotas
module.exports = routes;
