import express from "express";
import videos from "./routes/videos";

const app = express();
app.use(express.json());

app.use("/videos", videos);

export default app;