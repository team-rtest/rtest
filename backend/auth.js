import { use, serializeUser, deserializeUser, authenticate } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import { sign } from "jsonwebtoken";
import {
  authenticate as _authenticate,
  serializeUser as _serializeUser,
  deserializeUser as _deserializeUser,
} from "./models/user";
import { SECRET_KEY } from "./config/keys"; // TODO change to dotenv

export const local = use(
  new LocalStrategy({ usernameField: "username" }, _authenticate())
);

serializeUser(_serializeUser());
deserializeUser(_deserializeUser()); // JWT strategy

export function generateToken(user) {
  return sign(user, SECRET_KEY, { expiresIn: 86400 });
}

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

export const jwtStrategy = use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    if (err) return done(err, false);
    else if (user) return done(null, user);
    else return done(null, false);
  })
);

export const verifyUser = authenticate("jwt", { session: false });
