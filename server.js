const express = require("express");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
