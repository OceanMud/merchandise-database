const express = require("express");

const Highscore = require("../models/highscore");
const router = new express.Router();

router.post("/highscore", async (req, res) => {
  const highscore = new Highscore(req.body);

  try {
    await highscore.save();

    const findHighscore = await Highscore.find();

    const sortHighscore = findHighscore.sort((a, b) =>
      a.score < b.score ? 1 : -1
    );

    if (sortHighscore.length > 10) {
      await Highscore.findOneAndDelete({
        score: sortHighscore[sortHighscore.length - 1].score,
      });

      sortHighscore.pop();
    }

    res.send(sortHighscore);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/highscore", async (req, res) => {
  const highscore = await Highscore.find();

  const sortHighscore = highscore.sort((a, b) => (a.score < b.score ? 1 : -1));

  try {
    res.send(sortHighscore);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
