const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

//middle wares
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// app.use(
//   cors({
//     origin: "https://elec-patient-records.vercel.app/",
//   })
// );
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
// Add headers before the routes are defined

//routes
const patientRoutes = require("./routes/patient.routes");
const userRoutes = require("./routes/user.routes");
const notesRoutes = require("./routes/notes.routes");
const templatesRoutes = require("./routes/templates.routes");

app.use("/api/patient", patientRoutes);
app.use("/api/user", userRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/templates", templatesRoutes);
