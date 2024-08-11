import { Hono } from "hono";
import authRouter from "./AuthRoutes";
import blogRouter from "./BlogRoutes";

const rootRouter = new Hono();

rootRouter.route("/user", authRouter);

rootRouter.route("/blog", blogRouter);

export default rootRouter;
