// Nossas importações de modulos  //
const express = require("express"); // Esta buscando dentro do 'node_modules' o express
const path = require("path"); // path ja é um arquivo que vem padrão dentro do express
const routes = require("./routes/routes"); // importamos na variavel as rotas criadas no arquivo 'routes'
const connectToDb = require("./database/db"); // importando nossa conexao do banco de dados

// executando nossas importações //
connectToDb(); // executando nossa função que importamos
const app = express(); // agora o APP recebe a execução do express, com isso podemos usar app. para buscar metodos do express
const port = 3000; // variavel que vai receber a porta do servidor

app.set("view engine", "ejs"); // informando qual o tipo de arquivo estamos trabalhando
app.use(express.static(path.join(__dirname, "public"))); // juntamos a nossa pasta 'padrao' com a 'public' onde se localiza nossos arquivos estaticos 'css','script.js'
app.use(express.urlencoded()); // para o servidor conseguir rodar o que for enviado de um formulario
app.use(routes); // nosso APP ira usar as rotas que foram importadas na variavel 'routes'

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
); // executa um metodo do express recebido pelo APP, que ira rodar nosso servidor
