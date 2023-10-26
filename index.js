const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: 10,
      name: "amit bilapatte",
      age: 23,
    },
    {
      id: 20,
      name: "sumit reddy",
      age: 21,
    },
    {
      id: 3,
      name: "amar singh",
      age: 24,
    },
  ]);
});

app.listen(5000, () => {
  console.log("App is  running on Port 5000");
});
