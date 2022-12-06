import express from "express";

import videos from "./routes/videos";
import categories from "./routes/categories";
import signIn from "./routes/signIn"

const app = express();
app.use(express.json());

app.use("/videos", videos);
app.use("/categories/", categories);
app.use("/signIn", signIn)

export default app; 