const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// Import Routes
const watchlistRoutes = require("./routes/watchlistRoutes");
app.use("/api/watchlists", watchlistRoutes);

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Watchlist API is running!" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));