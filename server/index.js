require("dotenv").config();

const express = require("express");
const app = express();

const { connect } = require("mongoose");

// const cors = require("cors");

const PORT = process.env.PORT || 8081;

const routes = require("./routes/routes");

app.use(express.json());

// app.use(
//   cors({
//     origin: "http://localhost:5501" || "http://127.0.0.1:5501",
//   })
// );

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}.`);
});

connect(process.env.DB_CONNECTION, () => {
  console.log("connected to database.");
});
