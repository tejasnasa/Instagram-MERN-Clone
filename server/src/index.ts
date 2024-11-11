import app from "./app";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_SECRET)
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log(err);
  });

export default app;