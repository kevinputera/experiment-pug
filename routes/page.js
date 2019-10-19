const express = require("express");
const { Database } = require("../db");

const router = express.Router();

router.get("/trips", (req, res) => {
  const trips = Database.findAll();
  res.render("trips", { title: "Trips", trips });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

module.exports = { pageRoutes: router };
