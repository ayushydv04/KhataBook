const mongoose = require("mongoose");

const hisaabSchema = new mongoose.Schema({
  // creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  // totalAmount: { type: Number, default: 0 }, // Optional, can be updated later
  isEncrypted: { type: Boolean, default: false },
  password: { type: String, select: false }, // Only needed if encrypted
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Hisaab", hisaabSchema);
