const express = require("express");
const router = express.Router();
const Result = require("../models/Result");

// ✅ Save result after exam submission
router.post("/", async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res.json({ message: "Result saved successfully", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all results of a user
router.get("/:email", async (req, res) => {
  try {
    const results = await Result.find({ userEmail: req.params.email });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
