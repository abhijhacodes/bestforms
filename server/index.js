import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello from BestForms!" });
});
