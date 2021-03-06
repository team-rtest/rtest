import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import compression from "compression";
import passport from "passport";
import mongoose from "mongoose";
import cors from "cors";
import bearerToken from "express-bearer-token";

import User from "./models/User.js";
import { generateToken, verifyGoogleToken } from "./auth/auth.js";
import graphqlServer from "./routes/graphql.js";
import { initObjectStorage } from "./routes/fileHandler.js";

if (!process.env.JEST_WORKER_ID) {
  mongoose.connect(
    process.env.MONGO_URI,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("MongoDB Successfully Connected ...");
      }
    }
  );

  initObjectStorage();
}

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(passport.initialize());
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bearerToken());
graphqlServer.applyMiddleware({
  app,
  path: "/api/graphql",
  cors: { origin: process.env.FRONTEND_URL },
});

app.get("/", (_, res) => {
  res.redirect("/status");
});

app.get("/status", (_, res) => {
  res.json({ status: "available" });
});

app.post("/signup", (req, res) => {
  if (req.body.username === "noauth") {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({ error: "This username is forbidden." });
  }

  User.register(
    new User({
      username: req.body.username,
      email: req.body.email,
      instructor: req.body.instructor,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err });
      } else {
        passport.authenticate("local")(req, res, () => {
          const token = generateToken({ username: req.user.username });
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.cookie("token", token, {
            path: "/",
            //secure: true,
            httpOnly: true,
            sameSite: "strict",
            maxAge: 604800,
          });
          res.json({ status: "Successfully Logged In" });
        });
      }
    }
  );
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  if (req.user.username === "noauth") {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.json({ error: "This username is forbidden." });
  }

  const token = generateToken({ username: req.user.username });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.cookie("token", token, {
    path: "/",
    //secure: true,
    httpOnly: true,
    sameSite: "strict",
    maxAge: 604800,
  });
  res.json({ status: "Successfully Logged In" });
});

app.get("/auth/google", bearerToken(), (req, res) => {
  verifyGoogleToken(req.token)
    .then((payload) => res.send(payload)) // TODO do some other stuff here, create a user etc
    .catch(() =>
      res.json({ status: "Could not verify your OAuth ID with Google" })
    );
});

export default app;
