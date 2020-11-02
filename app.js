const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const homeRoutes = require("./routes/home");
const manaliRoutes = require("./routes/manali");
const keralaRoutes = require("./routes/kerala");
const gujaratRoutes = require("./routes/gujarat");
const path = require("path");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.json());

app.use("/home",homeRoutes);

app.use("/manali",manaliRoutes);
app.use("/kerala",keralaRoutes);
app.use("/gujarat",gujaratRoutes);

app.listen(8080);