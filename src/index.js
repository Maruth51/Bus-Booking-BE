const express = require("express");
const db = require("./config/DbConnect");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const indexRouter = require("./routes/indexRouter");
const busRouter = require("./routes/busRouter");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.use("/bus", busRouter);
app.use("/", indexRouter);

//invalid route
app.use((req, res) => {
  res.status(404).send("Requested url not found");
});
const server = app.listen(process.env.port || 3000, () => {
  console.log(`server runnin on ${server.address().port} `);
});
