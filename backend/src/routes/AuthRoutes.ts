import { Hono } from "hono";

const authRouter = new Hono();

authRouter.post("/signup", (c) => {
  return c.text("Hello in Signup Page");
});

authRouter.post("/signin", (c) => {
  return c.text("Hello Signin page");
});

export default authRouter;
