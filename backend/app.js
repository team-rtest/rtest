import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import graphqlRouter from "./routes/graphql.js";
import User from "./models/User.js";
import auth from "./auth.js";
import compression from "compression";
import passport from "passport";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("MongoDB Successfully Connected ...");
  }
});

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
          const token = auth.generateToken({ _id: req.user._id });
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ token, status: "Successfully Logged In" });
        });
      }
    }
  );
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  const token = auth.generateToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ token, status: "Successfully Logged In" });
});

app.use("/graphql", graphqlRouter);

export default app;
