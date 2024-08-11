import { Hono } from "hono";
import rootRouter from "./routes/RootRoute";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/v1", rootRouter);

export default app;
