import express = require("express");
import videos from "./routes/videos";
import categories from "./routes/categories";

const app = express();
app.use(express.json());

app.use("/videos", videos);
app.use("/categories/", categories);


app.listen(3333, () => {
  console.log("HTTP Server running!");
});

export default app;