import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import graphqlRouter from "./routes/graphql.js";
import User from "./models/User.js";
import { generateToken } from "./auth.js";
import compression from "compression";
import passport from "passport";
import mongoose from "mongoose";

mongoose.connect(
  process.env.MONGO_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("MongoDB Successfully Connected ...");
    }
  }
);

const app = express();
app.use(passport.initialize());
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.post("/signup", (req, res) => {
  User.register(
    new User({ username: req.body.username }),
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
          res.json({ token, status: "Successfully Logged In" });
        });
      }
    }
  );
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  const token = generateToken({ username: req.user.username });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ token, status: "Successfully Logged In" });
});

if (process.env.GOOGLE_CLIENT_ID) {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/plus.login",
        ,
        "https://www.googleapis.com/auth/plus.profile.emails.read",
      ],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/auth/google/success",
      failureRedirect: "/auth/google/failure",
    })
  );
}

app.use("/graphql", graphqlRouter);

export default app;
