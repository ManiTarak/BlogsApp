import { Hono } from "hono";

const blogRouter = new Hono();

blogRouter.post("/", (c) => {
  return c.text("Posting a blog");
});

blogRouter.put("/:id", (c) => {
  return c.text("updating a blog");
});

blogRouter.get("/bulk", (c) => {
  return c.text("Getting  blogs");
});

blogRouter.get("/:id", (c) => {
  return c.text("Getting  a particular blog");
});

export default blogRouter;
