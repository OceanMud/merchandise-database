const mongoose = require("mongoose");

const highscoreSchema = new mongoose.Schema(
  {
    score: {
      type: Number,
      required: true,
    },
    owner: {
      type: String,
      required: true,
      trim: true,
    },
    hero: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Highscore = mongoose.model("Highscore", highscoreSchema);

module.exports = Highscore;
