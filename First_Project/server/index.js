import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import postRoutes from "./routes/posts.js"

// mongoose.set('strictQuery', false)
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts',postRoutes);


const CONN_STR ="mongodb+srv://Ankit03Rana:bsSKDhDx9XUGdTUZ@cluster0.qfguarx.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONN_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`))
  )
  .catch((err) => console.log(err));
