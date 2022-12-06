import express from "express";

import videos from "./routes/videos";
import categories from "./routes/categories";
import signIn from "./routes/signIn"
import signUp from "./routes/signUp"

import dotenv from "dotenv-safe"
dotenv.config();

const app = express();
app.use(express.json());

app.use("/videos", videos);
app.use("/categories/", categories);
app.use("/signIn", signIn);
app.use("/signUp", signUp )

export default app; 