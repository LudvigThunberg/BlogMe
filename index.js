const express = require("express");
const userRouter = require("./routers/user-router.js");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi!");
});

app.use("/user", userRouter);

app.listen(3030, () => {
  console.log("http://localhost:3030");
});
