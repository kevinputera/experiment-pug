const express = require("express");
const { Database } = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  const trips = Database.findAll();
  res.json(trips);
});

router.post("/", (req, res) => {
  const trip = Database.save(req.body);
  res.json(trip);
});

module.exports = { tripRoutes: router };
