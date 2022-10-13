const express = require("express");
const path = require("path");
const router = express.Router();
const {
	getAllTrips,
	addTrip,
	getAllTodaysTrips,
} = require("../controllers/indexController");



router.get("/today", getAllTodaysTrips);
router.get("/:start_city/:end_city/:date/:trip_type", getAllTrips);
router.post("/", addTrip);

module.exports = router;
