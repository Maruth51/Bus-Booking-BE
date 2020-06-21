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
      const bus = await Bus.find({});
      res.send(bus);
    } catch (e) {
      console.log(e);
      res.status(500);
    }
  })
  .get("/:busId/availability", async (req, res, next) => {
    try {
      const { busId } = req.params;
      const busInfo = await Bus.findById(busId, { seat: 1, fare: 1 });
      res.json(busInfo);
    } catch (e) {
      console.log(e);
    }
  })
  .put("/blockSeat", async (req, res, next) => {
    try {
      const { seat, busId } = req.body;
      const bus = await Bus.findById(busId, { seat: 1 });
      const newSeat = bus.seat.map((ele, ind) =>{
        if (seat.includes(ind + 1)) {
          if (ele) {res.status(401).send("Seat not available")};
          else {
            return true;
          }
        } else {
          return ele;
        }
      });
      await Bus.findByIdAndUpdate(busId, { seat: newSeat });
      res.send("Success");
    } catch (e) {
      console.log(e);
      res.status(500);
    }
  });

module.exports = router;
