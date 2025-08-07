const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { CONNECT_DB } = require("./src/config/mongodb");
const API_V1 = require("./src/routes/V1/index");
const errorHandlingMiddleware = require("./src/middlewares/errorHandlingMiddleware");

const START_SERVER = () => {
  const app = express();

  app.use(express.json());

  app.use(
    cors({
      methods: ["GET", "PUT", "POST", "DELETE"],
    })
  );

  // Gắn route chính
  app.use("/v1", API_V1);

  // Middleware xử lý lỗi (nếu có)
  app.use(errorHandlingMiddleware);

  const port = process.env.PORT || 8017;

  const listener = app.listen(port, () => {
    console.log(`🚀 Server is running on port ${listener.address().port}`);
  });
};

CONNECT_DB()
  .then(() => START_SERVER())
  .catch((error) => {
    console.log("❌ Failed to connect to DB:", error);
    process.exit(0);
  });
