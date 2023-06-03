const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../database/db");

const secret = "mysecret";

async function registerUser(user) {
  try {
    // Verifica se a senha tem pelo menos 8 caracteres
    if (user.password.length < 8) {
      throw new Error("Senha deve ter pelo menos 8 caracteres.");
    }

    // Verifica se a senha contém pelo menos um caractere especial, um número,
    // uma letra maiúscula e uma letra minúscula
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!regex.test(user.password)) {
      throw new Error(
        "Senha deve conter pelo menos um caractere especial, um número, uma letra maiúscula e uma letra minúscula."
      );
    }

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

async function updateEmail(userEmail, newEmail) {
  try {
    // Atualiza o email na tabela de usuários
    const result = await connection.query(
      "UPDATE users SET email = ? WHERE email = ?",
      [newEmail, userEmail]
    );

    if (result[0].affectedRows === 0) {
      throw new Error("Email não encontrado.");
    }

    return "Email atualizado com sucesso.";
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao atualizar o email.");
  }
}

async function updatePassword(userEmail, newPassword) {
  try {
    // Gera um hash da nova senha do usuário
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Atualiza a senha do usuário no banco de dados
    const result = await connection.query(
      "UPDATE users SET password = ? WHERE email = ?",
      [hashedPassword, userEmail]
    );

    if (result.affectedRows === 0) {
      throw new Error("Não foi possível atualizar a senha do usuário.");
    }

    return { message: "Senha atualizada com sucesso." };
  } catch (error) {
    console.log(error);
    throw new Error("Erro ao atualizar a senha do usuário.");
  }
}

module.exports = {
  registerUser,
  authenticateUser,
  updateEmail,
  updatePassword,
};
