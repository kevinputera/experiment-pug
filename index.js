const express = require("express");
const { join } = require("path");

const { pageRoutes } = require("./routes/page");
const { tripRoutes } = require("./routes/trip");

const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));

app.use("/p", pageRoutes);
app.use("/trips", tripRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
