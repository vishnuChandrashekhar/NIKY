import express from "express";
import config from "config";

const app: express.Application = express();
const PORT = config.get<number>("port");

app.use(express.json());

app.get("/", (_req: express.Request, res: express.Response) => {
  res.send("The NIKY backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
