import express from "express";
import videos from "./routes/videos"

const app = express();
app.use(express.json());

app.use("/videos", videos);

app.listen(3333, () => {
  console.log("HTTP Server running!");
});
