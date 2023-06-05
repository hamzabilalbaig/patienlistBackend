const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
// const pg = require("pg");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = (req, res) => {
  const d = new Date();
  res.end(d.toString());
};

allowCors(handler);
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
var port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
app.get("/", (req, res) => res.send("Hello World!"));
