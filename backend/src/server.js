const express = require("express");
const { config } = require("dotenv");
const { join } = require("path");
const routes = require("./routes/routes");
const bookRoutes = require("./routes/bookRoutes");
const { authenticateToken } = require("./middleware/middleware");
const cors = require("cors");

const app = express();
app.use(express.json());

config({
  path: join(__dirname, ".env"),
});

const PORT = process.env.PORT || 3000;

const pool = require("./database/db");

app.use(cors());

app.use((req, res, next) => {
  req.pool = pool;
  next();
});

app.use("/api", routes);

app.use("/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}.`);
});
