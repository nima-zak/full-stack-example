const express = require("express");
const router = new express.Router();

taskList = [
  { task: "t1", author: "Nima", date: "3/7/2022" },
  { task: "t2", author: "Maryam", date: "3/27/2022" },
  { task: "t3", author: "Diana", date: "3/8/2022" }
];

router.get("/tasks", (req, res) => {
  res.status(200).json({
    message: "all acivities",
    data: taskList
  });
});

module.exports = router;
