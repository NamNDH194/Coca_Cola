const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;

async function CONNECT_DB() {
  try {
    await mongoose.connect(MONGODB_URI); // ❌ Không cần truyền các tùy chọn cũ
    console.log("✅ Connected to MongoDB via Mongoose");
  } catch (err) {
    console.error("❌ Mongoose connection error:", err);
    throw err;
  }
}

module.exports = { CONNECT_DB };
