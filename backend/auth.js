import passport from "passport";
// import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import { sign } from "jsonwebtoken";
import { User } from "./models/User";

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

export const jwtStrategy = use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    if (err) return done(err, false);
    else if (user) return done(null, user);
    else return done(null, false);
  })
);

export const verifyUser = User.authenticate("jwt", { session: false });
