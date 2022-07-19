const mongoose = require("mongoose"); // importamos a biblioteca moongose que ira trabalhar com nosso banco de dados

const connectToDb = () => {
  mongoose
    .connect(
      // nosssa string de conexao que esta no banco de dados mongo Db repassada como parametro da função connect
      "mongodb+srv://root:admin@todolist.qqnu09a.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } // usamos esse objeto como segundo parametro para evitar erros de conexão
    )
    .then(() => console.log("MongoDB Atlas CONECTADO"))
    .catch((err) => console.log(err));
}; // usamos .then,.catch para repassar a informação se tivemos conexão ou não

//exportamos nosso arquivo como um modulo para ser usado no index.js
module.exports = connectToDb;
