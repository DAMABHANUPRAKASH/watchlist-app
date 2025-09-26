const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  changePct: Number,
  sparkline: [Number],
});

const WatchlistSchema = new mongoose.Schema({
  name: String,
  icon: String,
  items: [ItemSchema],
});

module.exports = mongoose.model("Watchlist", WatchlistSchema);
