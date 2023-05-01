const jwt = require("jsonwebtoken");
const secret = "mysecret";
const connection = require("../database/db");

function authenticateUser(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secret, async (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }

    try {
      const [rows] = await connection.query(
        "SELECT * FROM users WHERE email = ?",
        decoded.email
      );

      if (rows.length === 0) {
        return res.sendStatus(401);
      }

      req.user = rows[0];
      next();
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
}

module.exports = { authenticateUser };
