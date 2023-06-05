const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
// const pg = require("pg");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const patientRoutes = require("./routes/patient.routes");
// const userRoutes = require("./routes/user.routes");
// const notesRoutes = require("./routes/notes.routes");
// const templatesRoutes = require("./routes/templates.routes");
// const vitalRouter = require("./routes/vitals.routes");
// const resultRouter = require("./routes/results.routes");
// const billsRouter = require("./routes/bills.routes");
// const billsItemsRouter = require("./routes/billsItems.routes");

app.use("/api/patient", patientRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/notes", notesRoutes);
// app.use("/api/templates", templatesRoutes);
// app.use("/api/vitals", vitalRouter);
// app.use("/api/result", resultRouter);
// app.use("/api/bills", billsRouter);
// app.use("/api/billsItems", billsItemsRouter);

app.listen(3001, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
