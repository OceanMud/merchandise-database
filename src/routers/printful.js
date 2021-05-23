const express = require("express");
const request = require("request");

const router = new express.Router();

router.get("/Sellercard", async (req, res) => {
  const options = {
    url: "https://api.printful.com/store/products/227826847",
    headers: {
      Authorization:
        "Basic " + "NXhtdnRoN2otc2ZxZS1odHVnOnRmZmIta3JybG40dDh3cTZ2",
    },
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      const info = JSON.parse(body);
      res.send(info);
    }
  }
  request(options, callback);
});

module.exports = router;
