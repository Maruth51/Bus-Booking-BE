const express = require("express");

const router = express.Router();
const Bus = require("../models/busInfo");

router
  .get("/", async (req, res, next) => {
    try {
      const bus = await Bus.find();
      console.log(bus);
      res.send(bus);
    } catch (e) {
      console.log(e);
      res.status(500);
    }
  })
  .get("/search", async (req, res, next) => {
    try {
      const bus = await Bus.find();
      console.log(req.query);
      res.send(bus);
    } catch (e) {
      console.log(e);
      res.status(500);
    }
  });

module.exports = router;
