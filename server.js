const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { CONNECT_DB } = require("./src/config/mongodb");
<<<<<<< HEAD
const API_V1 = require("./src/routes/V1");
const errorHandlingMiddleware = require("./src/middlewares/errorHandlingMiddleware");
=======
const API_V1 = require("./src/routes/V1/index");
>>>>>>> c4e0ede (done api lay danh sach hang ton)

const START_SERVER = () => {
  const app = express();

  app.use(express.json());
<<<<<<< HEAD
  app.use(
    cors({
      //   origin: process.env.CLIENT_PORT,
      methods: ["GET", "PUT", "POST", "DELETE"],
    })
  );
  app.use("/v1", API_V1);
  app.use(errorHandlingMiddleware);
=======

  app.use(cors({
    methods: ["GET", "PUT", "POST", "DELETE"],
  }));

  // ✅ Gắn route chính
  app.use("/", API_V1);
  
>>>>>>> c4e0ede (done api lay danh sach hang ton)

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
