import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import sign from "jsonwebtoken";
import User from "./models/User.js";

passport.use(User.createStrategy());

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
    if (err) return done(err, false);
    else if (user) return done(null, user);
    else return done(null, false);
  })
);

export const verifyUser = User.authenticate("jwt", { session: false });
