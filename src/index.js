const express = require("express");
const db = require("./config/DbConnect");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const indexRouter = require("./routes/indexRouter");
const busRouter = require("./routes/busRouter");
const userRouter = require("./routes/userRouter");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/bus", busRouter);
app.use("/user", userRouter);
app.use("/", indexRouter);

//invalid route
app.use((req, res) => {
  res.status(404).send("Requested url not found");
});
const server = app.listen(process.env.PORT, () => {
  console.log(`server running on ${server.address().port} `);
});
