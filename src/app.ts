import express, { Application } from "express";

import bodyParserMiddleware from "./middlewares/bodyParserMiddleware";
import errorMiddleware from "./middlewares/errorHandlerMiddleware";
import postsRoute from "./routes/post.routes";
import commentsRoute from "./routes/comments.routes";
import tagsRoute from "./routes/tags.routes";
import postTagsRoute from "./routes/postTags.routes";

const app: Application = express();

app.use(bodyParserMiddleware);
app.use(errorMiddleware);

app.use("/api", postsRoute);
app.use("/api", commentsRoute);
app.use("/api", tagsRoute);
app.use("/api", postTagsRoute);

export default app;
