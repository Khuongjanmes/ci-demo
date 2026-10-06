const express = require("express");
const sum = require("./sum");

const app = express();

app.get("/", (req, res) => {
  res.send("Xin chào từ ci-demo!");
});

app.get("/sum", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ result: sum(a, b) });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server chạy tại http://localhost:${port}`));
