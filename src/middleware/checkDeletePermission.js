const pool = require("../database/db");
const checkDeletePermission = async (req, res, next) => {
  const idlivros = req.params.idlivros;
  const userEmail = req.userEmail;
  console.log("Email do usuário atual: ", userEmail);
  try {
    const conn = await pool.getConnection();
    const [userResult] = await conn.query(
      "SELECT iduser FROM users WHERE email = ?",
      [userEmail]
    );
    const iduser = userResult[0].iduser;

    // Verifica se o usuário tem permissão para deletar o livro
    const [bookResult] = await conn.query(
      "SELECT livros.* FROM livros INNER JOIN upload_history ON livros.idlivros = upload_history.idlivros WHERE upload_history.iduser = ? AND livros.idlivros = ?",
      [iduser, idlivros]
    );

    if (!bookResult.length) {
      conn.release();
      return res
        .status(403)
        .send("Você não tem permissão para deletar esse livro");
    }

    conn.release();
    next();
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao verificar permissão para deletar livro");
  }
};

module.exports = { checkDeletePermission };
