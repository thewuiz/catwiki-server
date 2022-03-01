import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/", require("./routes/api.route"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
