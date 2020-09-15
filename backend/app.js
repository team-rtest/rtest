import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import graphqlRouter from "./routes/graphql";
import compression from "compression";
import passport from "passport";
import "mongoose";

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  const users = User.getUsers();
  const matchingUser = users.find((user) => user.username === username);
  done(null, matchingUser);
});

mongoose.connect(MONGO_URI, { useNewUrlParser: true }, (err) => {
  if (err)
    console.log(err.message)
  else
    console.log('MongoDB Successfully Connected ...');
});

const app = express();
app.use(passport.initialize());
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.post("/signup", (req, res) => {
  User.register(
    new User({ email: req.body.email }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err: err });
      } else {
        passport.authenticate("local")(req, res, () => {
          const token = authenticate.generateToken({ _id: req.user._id });
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({ token: token, status: "Successfully Logged In" });
        });
      }
    }
  );
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  const token = authenticate.generateToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({ token: token, status: "Successfully Logged In" });
});

app.use("/graphql", graphqlRouter);

export default app;
