const express = require("express");
const app = express();
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const db = require("./db");

// Configurações do servidor
app.use(express.json());
app.use(cors());

// Rota de autenticação
app.use("/auth", authRoutes);

// Rotas de livros
app.use("/books", bookRoutes);

// Iniciar o servidor
db.getConnection()
  .then((conn) => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
    app.listen(3001, () => console.log("Servidor rodando na porta 3001..."));
  })
  .catch((err) => {
    console.error("Erro de conexão ao banco de dados:", err);
    process.exit(1);
  });
