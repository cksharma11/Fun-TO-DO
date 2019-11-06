const express = require("express");
const bodyParser = require("body-parser");
const view = require("ejs");
const { logger } = require("./src/utils/utils");

const PORT = process.env.PORT || 8080;
const app = new express();

app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("build"));
app.set("views", __dirname + "/build");
app.engine("html", view.renderFile);
app.set("view engine", "html");

app.listen(PORT, () => console.log("server is running on - ", PORT));
