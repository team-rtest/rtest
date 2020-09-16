import dotenv from "dotenv";
dotenv.config();

import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";

import { sign } from "jsonwebtoken";
import User from "./models/User.js";

passport.use(User.createStrategy());

if (process.env.GOOGLE_CLIENT_ID) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://yourdormain:3000/auth/google/callback",
        passReqToCallback: true,
      },

      function (request, accessToken, refreshToken, profile, done) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    )
  );
}
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

export function generateToken(user) {
  return sign(user, process.env.SECRET_KEY, { expiresIn: 86400 });
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

export const verifyUser = User.authenticate("jwt", { session: false });
