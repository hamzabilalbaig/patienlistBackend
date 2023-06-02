const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

// Middlewares
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Add headers before the routes are defined
// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://elec-patient-records.vercel.app"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

// Routes
const patientRoutes = require("./routes/patient.routes");
const userRoutes = require("./routes/user.routes");
const notesRoutes = require("./routes/notes.routes");
const templatesRoutes = require("./routes/templates.routes");
const vitalRouter = require("./routes/vitals.routes");
const resultRouter = require("./routes/results.routes");
const billsRouter = require("./routes/bills.routes");
const billsItemsRouter = require("./routes/billsItems.routes");

app.use("/api/patient", patientRoutes);
app.use("/api/user", userRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/templates", templatesRoutes);
app.use("/api/vitals", vitalRouter);
app.use("/api/result", resultRouter);
app.use("/api/bills", billsRouter);
app.use("/api/billsItems", billsItemsRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
