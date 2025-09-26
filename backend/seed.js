const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Watchlist = require("./models/Watchlist");

dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Error:", error.message);
    process.exit(1);
  }
}

const seedData = [
  {
    name: "Options Watchlist",
    icon: "👁️",
    items: [],
  },
  {
    name: "Cryptos to Watch",
    icon: "👾",
    items: [],
  },
  {
    name: "Watchlist",
    icon: "💡",
    items: [],
  },
  {
    name: "Legend Watchlist",
    icon: "💡",
    items: [
      { symbol: "GOOG", price: 252.22, changePct: -0.26, sparkline: [251.5, 252.0, 253.0, 252.5, 252.22] },
      { symbol: "XYZ", price: 75.98, changePct: -1.85, sparkline: [78.0, 76.5, 76.2, 76.0, 75.98] },
      { symbol: "ROKU", price: 98.5, changePct: -0.56, sparkline: [100.0, 99.8, 99.5, 98.9, 98.5] },
      { symbol: "AMD", price: 161.45, changePct: 1.04, sparkline: [158.0, 159.5, 160.0, 161.0, 161.45] },
      { symbol: "AMZN", price: 221.84, changePct: -2.54, sparkline: [228.0, 225.0, 223.0, 222.0, 221.84] },
    ],
  },
];

async function seedDB() {
  try {
    await connectDB();
    await Watchlist.deleteMany({});
    await Watchlist.insertMany(seedData);
    console.log("✅ Database seeded!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Seed error:", err);
    mongoose.connection.close();
  }
}

seedDB();
