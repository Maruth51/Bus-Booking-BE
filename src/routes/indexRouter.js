var express = require("express");
var router = express.Router();
const City = require("../models/city");

router
  .get("/:query", async (req, res) => {
    try {
      const { query } = req.params;
      const key = new RegExp("^" + query);
      const city = await City.find(
        {
          City: { $regex: key, $options: "i" }
        },
        { City: 1, _id: 0 }
      ).limit(10);
      const arrCity = city.map((ele, index) => {
        return ele.City;
      });
      res.send(arrCity);
    } catch {}
  })
  .get("/buses", async (req, res, next) => {
    try {
    } catch (e) {}
  });

module.exports = router;
