import express from "express";
import { config } from 'dotenv';
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
config({
    path: "./config.env"
});
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    dbName: "bookStoreAPI"
}).then((c) => { console.log("Database Connected"); })
    .catch((e) => { console.log(e) })

app.use("/books", bookRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

app.get("/", (req, res) => {
    res.send("Book Store API is working successfully");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})