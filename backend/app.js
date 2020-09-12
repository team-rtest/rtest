import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import graphqlRouter from "./routes/graphql";
import compression from "compression";

const app = express();
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/graphql", graphqlRouter);

export default app;
