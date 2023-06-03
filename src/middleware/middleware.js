const jwt = require("jsonwebtoken");
const secret = "mysecret";

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    const userEmail = user.email;
    req.user = user;
    req.userEmail = userEmail;
    next();
  });
}

module.exports = { authenticateToken };
