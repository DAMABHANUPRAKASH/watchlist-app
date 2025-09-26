const express = require("express");
const router = express.Router();
const Watchlist = require("../models/Watchlist");

// ✅ GET all watchlists
router.get("/", async (req, res) => {
  try {
    const watchlists = await Watchlist.find();
    res.json({ watchlists });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ GET single watchlist by ID
router.get("/:id", async (req, res) => {
  try {
    const watchlist = await Watchlist.findById(req.params.id);
    if (!watchlist) {
      return res.status(404).json({ error: "Watchlist not found" });
    }
    res.json(watchlist);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// // ✅ POST create new watchlist
// router.post("/", async (req, res) => {
//   try {
//     const { name, icon, items } = req.body;

//     if (!name || !icon) {
//       return res.status(400).json({ error: "Name and icon are required" });
//     }

//     const newWatchlist = new Watchlist({ name, icon, items: items || [] });
//     const saved = await newWatchlist.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // ✅ PUT update a watchlist
// router.put("/:id", async (req, res) => {
//   try {
//     const { name, icon, items } = req.body;

//     const updated = await Watchlist.findByIdAndUpdate(
//       req.params.id,
//       { name, icon, items },
//       { new: true, runValidators: true }
//     );

//     if (!updated) {
//       return res.status(404).json({ error: "Watchlist not found" });
//     }

//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // ✅ DELETE a watchlist
// router.delete("/:id", async (req, res) => {
//   try {
//     const deleted = await Watchlist.findByIdAndDelete(req.params.id);

//     if (!deleted) {
//       return res.status(404).json({ error: "Watchlist not found" });
//     }

//     res.json({ message: "Watchlist deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

module.exports = router;
