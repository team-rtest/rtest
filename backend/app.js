import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import graphqlRouter from "./routes/graphql.js";
import User from "./models/User.js";
import { generateToken } from "./auth.js";
import compression from "compression";
import passport from "passport";
import mongoose from "mongoose";
import cors from "cors";

if (!process.env.JEST_WORKER_ID) {
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
}

const app = express();
app.use(cors());
app.use(passport.initialize());
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is available");
});

app.post("/signup", (req, res) => {
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
  res.cookie('token', token, { path: "/", secure: true, httpOnly: true});
  res.json({ status: "Successfully Logged In" });
});

if (process.env.GOOGLE_CLIENT_ID) {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function (req, res) {
      res.redirect("/");
    }
  );
}

app.use("/graphql", graphqlRouter);

export default app;
