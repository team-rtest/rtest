import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import graphqlRouter from "./routes/graphql";
import compression from "compression";

import passport from "passport";
import { GraphQLLocalStrategy } from "graphql-passport";
import session from "express-session";
import uuid from "uuid/v4";

// TODO take secret from env variable in rtest.env instead
// TODO set cookie: { secure: true } in prod so it can only be sent over HTTPS
const SESSION_SECRET = "bad secret";

passport.use(
  new GraphQLLocalStrategy((email, password, done) => {
    // Replace with UserResolvers when done with mongo integration
    const users = User.getUsers();
    const matchingUser = users.find(
      (user) => email === user.email && password === user.password
    );
    const error = matchingUser ? null : new Error("no matching user");
    done(error, matchingUser);
  })
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((_id, done) => {
  const users = User.getUsers();
  const matchingUser = users.find((user) => user._id === _id);
  done(null, matchingUser);
});

const app = express();
app.use(
  session({
    genid: (req) => uuid(),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/graphql", graphqlRouter);

export default app;
