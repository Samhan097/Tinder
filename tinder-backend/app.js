import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Crads from "./dbCrads.js";

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:gPw3VBNFtsjLA0zB@cluster0.effr4.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello @!!"));

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Crads.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Crads.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
// Listener
app.listen(port, () => console.log(`listning on localhost port: ${port}`));
