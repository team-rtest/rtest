import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import User from "./models/User";
import { generateToken, verifyGoogleToken } from "./auth/auth";
import compression from "compression";
import passport from "passport";
import mongoose from "mongoose";
import cors from "cors";
import graphqlServer from "./routes/graphql.js";
import bearerToken from "express-bearer-token";

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
app.set("trust proxy", true);
app.set("trust proxy", "loopback");
app.use(cors());
app.use(passport.initialize());
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
graphqlServer.applyMiddleware({ app });

app.get("/status", (_, res) => {
  res.json({ status: "available" });
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
          res.cookie("token", token, {
            path: "/",
            secure: true,
            httpOnly: true,
            sameSite: "strict",
          });
          res.json({ status: "Successfully Logged In" });
        });
      }
    }
  );
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  const token = generateToken({ username: req.user.username });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.cookie("token", token, {
    path: "/",
    secure: true,
    httpOnly: true,
    sameSite: "strict",
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
