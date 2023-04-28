const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../database/db");

const secret = "mysecret";

async function registerUser(user) {
  try {
    // Gera um hash da senha do usuário
    const hashedPassword = await bcrypt.hash(user.password, 10);

    // Insere o usuário no banco de dados
    const result = await connection.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [user.name, user.email, hashedPassword]
    );

    return result[0].insertId;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao cadastrar usuário.");
  }
}

async function authenticateUser(email, password) {
  try {
    // Busca o usuário no banco de dados pelo email
    const [rows] = await connection.query(
      "SELECT * FROM users WHERE email = ?",
      email
    );

    if (rows.length === 0) {
      throw new Error("Usuário não encontrado.");
    }

    // Compara a senha informada com o hash armazenado no banco de dados
    const match = await bcrypt.compare(password, rows[0].password);

    if (!match) {
      throw new Error("Senha incorreta.");
    }

    // Gera um token de autenticação
    const token = jwt.sign({ id: rows[0].id, email: rows[0].email }, secret);

    return token;
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao autenticar usuário.");
  }
}

module.exports = { registerUser, authenticateUser };
