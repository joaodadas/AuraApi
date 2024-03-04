import * as express from "express";
import { config } from "dotenv";

config();

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`listen on port localhost:${PORT}`));

app.get("/", (req, res) => {
  res.send("bateu");
});
