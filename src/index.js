const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes/routes.js");
require("./db/mongoose.js");
const port = process.env.PORT || 4000;
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE,PATCH",
  })
);
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use("/v1", routes);

app.listen(port, () => {
  console.log("App listening on port " + port);
});
