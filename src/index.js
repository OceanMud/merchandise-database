const express = require("express");
require("./db/mongoose");
// const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
