const passport = require("passport");
const OutlookStrategy = require("passport-outlook");
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config();

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id).then((user) => {
//     done(null, user);
//   });
// });

passport.use(
  new OutlookStrategy(
    {
      // options for outlook strategy
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.SECRET_ID,
      callbackURL: "/auth/outlook/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      // check if user already exixts
      console.log(profile);
      //   User.findOne({
      //     googleId: profile.id,
      //   }).then((currUser) => {
      //     if (currUser) {
      //       done(null, currUser);
      //     } else {
      //       // create user
      //       new User({
      //         username: profile.displayName,
      //         googleId: profile.id,
      //         thumbnail: profile._json.picture,
      //       })
      //         .save()
      //         .then((newUser) => {
      //           //   console.log(newUser);
      //           done(null, newUser);
      //         });
      //     }
      //   });
    }
  )
);
