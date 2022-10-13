const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
const router = require("./routes/indexRoutes");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "/frontend/browser")));

app.use("/api", router);
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname + "/frontend/browser/index.html"));
});

// setInterval(() => {
// 	console.log(new Date().toLocaleTimeString('it-IT'));
// 	console.log(new Date().toLocaleTimeString('it-IT') === "00:00:00");
// }, 1000);

app.listen(PORT, () =>
	console.log(`listening on port ${PORT} at ${new Date()}`)
);
