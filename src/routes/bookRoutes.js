const express = require("express");
const pool = require("../database/db");
const router = express.Router();
const { authenticateToken } = require("../middleware/middleware");

// Rota para listar todos os livros
router.get("/livros", async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const [rows, fields] = await conn.query("SELECT * FROM livros");
    conn.release();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar livros");
  }
});

// Rota para listar todos os livros
router.get("/upload", authenticateToken, async (req, res) => {
  const userEmail = req.userEmail;
  console.log("Email do usuário atual: ", userEmail);
  try {
    const conn = await pool.getConnection();
    const [userResult] = await conn.query(
      "SELECT iduser FROM users WHERE email = ?",
      [userEmail]
    );
    const iduser = userResult[0].iduser;

    let query =
      "SELECT livros.* FROM livros INNER JOIN upload_history ON livros.idlivros = upload_history.idlivros WHERE upload_history.iduser = ?";

    // Verifica se foi passado o parâmetro para listar apenas os enviados na última atualização
    if (req.query.enviados === "enviados") {
      query +=
        " AND upload_history.data_upload = (SELECT MAX(data_upload) FROM upload_history WHERE idlivros = livros.idlivros)";
    }

    const [rows, fields] = await conn.query(query, [iduser]);
    conn.release();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar livros");
  }
});

router.post("/livros", authenticateToken, async (req, res) => {
  const { titulo, autor, descricao, link_download } = req.body;
  const userEmail = req.userEmail;

  console.log("Email do usuário atual: ", userEmail);

  try {
    const conn = await pool.getConnection();

    // Obtém o id do usuário atual
    const [userResult] = await conn.query(
      "SELECT iduser FROM users WHERE email = ?",
      [userEmail]
    );
    const iduser = userResult[0].iduser;

    // Insere o livro na tabela 'livros'
    const [livroResult] = await conn.query(
      "INSERT INTO livros (titulo, autor, descricao, link_download) VALUES (?, ?, ?, ?)",
      [titulo, autor, descricao, link_download]
    );

    // Insere na tabela 'upload_history' com o id do usuário atual
    const [uploadResult] = await conn.query(
      "INSERT INTO upload_history (iduser, idlivros) VALUES (?, ?)",
      [iduser, livroResult.insertId]
    );

    conn.release();
    res.status(201).json({
      id: livroResult.insertId,
      titulo,
      autor,
      descricao,
      link_download,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao criar livro");
  }
});

// Rota para atualizar um livro existente
router.put("/livros/:id", async (req, res) => {
  const { id } = req.params;
  const { titulo, autor, descricao, link_download } = req.body;
  try {
    const conn = await pool.getConnection();
    const [result] = await conn.query(
      "UPDATE livros SET titulo = ?, autor = ?, descricao = ?, link_download = ? WHERE id = ?",
      [titulo, autor, descricao, link_download, id]
    );
    conn.release();
    if (result.affectedRows === 0) {
      res.status(404).send("Livro não encontrado");
    } else {
      res.send("Livro atualizado com sucesso");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao atualizar livro");
  }
});

// Rota para excluir um livro existente
router.delete("/livros/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const conn = await pool.getConnection();
    const [result] = await conn.query("DELETE FROM livros WHERE id = ?", [id]);
    conn.release();
    if (result.affectedRows === 0) {
      res.status(404).send("Livro não encontrado");
    } else {
      res.send("Livro excluído com sucesso");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao excluir livro");
  }
});

// Rota de pesquisa de livros
router.get("/search", async (req, res) => {
  const query = req.query.q;
  const conn = await db.getConnection();
  try {
    const [results, fields] = await conn.query(
      "SELECT * FROM livros WHERE titulo LIKE ? OR autor LIKE ?",
      [`%${query}%`, `%${query}%`]
    );
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro interno do servidor" });
  } finally {
    conn.release();
  }
});

module.exports = router;
