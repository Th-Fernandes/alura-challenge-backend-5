import express from "express";
import videos from "./routes/videos";
import categories from "./routes/categories";

const app = express();
app.use(express.json());

app.use("/videos", videos);
app.use("/categories/", categories);

export default app; 