const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

//middle wares
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);

//routes
const patientRoutes = require("./routes/patient.routes");
const userRoutes = require("./routes/user.routes");

app.use("/api/patient", patientRoutes);
app.use("/api/user", userRoutes);
