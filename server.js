const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "hello from server" });
});

app.listen(process.env.PROT || 3001, () => {
  console.log(`Server listening on ${process.env.PROT || 3001}`);
});
