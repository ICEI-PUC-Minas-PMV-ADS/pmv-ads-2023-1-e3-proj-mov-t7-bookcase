const express = require("express");
const { authenticateToken } = require("../middleware/middleware");
const { registerUser, authenticateUser } = require("../middleware/auth");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const userId = await registerUser(req.body);
    res.status(201).json({ message: "Usuário cadastrado com sucesso." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const token = await authenticateUser(req.body.email, req.body.password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

router.get("/profile", authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
