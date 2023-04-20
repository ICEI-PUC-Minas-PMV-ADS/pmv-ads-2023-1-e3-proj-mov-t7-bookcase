const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

  if (!user) {
    return res.status(401).json({ message: "Email ou senha incorretos" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: "Email ou senha incorretos" });
  }

  const token = "token_de_autenticação";
  res.json({ message: "Login bem sucedido", token });
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const [rows] = await db.query("SELECT * FROM users WHERE email=?", [email]);

  if (rows.length > 0) {
    return res.status(400).json({ error: "User already exists" });
  }

  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);

  try {
    await db.query(
      "INSERT INTO users(name, email, password) VALUES (?, ?, ?)",
      [name, email, hash]
    );

    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
