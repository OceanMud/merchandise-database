const express = require("express");
require("./db/mongoose");
// const cookieParser = require("cookie-parser");

const cors = require("cors");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const printfulRouter = require("./routers/printful");
const highscore = require("./routers/highscore");

const app = express();
const port = process.env.PORT;

app.use(
  cors({ origin: "https://bunniesjourney.netlify.app/", credentials: true })
);
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(userRouter);
app.use(taskRouter);
app.use(printfulRouter);
app.use(highscore);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
