import dotenv from "dotenv";
dotenv.config();

import passport from "passport";
import pkg from "passport-jwt";
const { Strategy: JwtStrategy, ExtractJwt } = pkg;

import jwt from "jsonwebtoken";
import User from "../models/User.js";
import googleAuth from "google-auth-library";
const { OAuth2Client } = googleAuth;

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

export function generateToken(user) {
  return jwt.sign(user, process.env.SECRET_KEY, { expiresIn: 86400 });
}

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

export const jwtStrategy = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    if (err) {
      return done(err, false);
    } else if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
);

export async function verifyGoogleToken(token) {
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const userid = payload["sub"];
  return payload;
}

export const verifyUser = User.authenticate("jwt", { session: false });

export const getUsernameFromToken = (token) =>
  jwt.verify(token, process.env.SECRET_KEY)["username"];
