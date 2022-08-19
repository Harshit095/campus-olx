const router = require("express").Router();
const passport = require("passport");
// auth login

// router.get("/login", (req, res) => {
//   res.render("login", { user: req.user });
// });

// auth logout

// router.get("/logout", (req, res) => {
//   // handle with passport
//   req.logout();
//   res.redirect("/");
// });

// auth google

router.get(
  "/outlook",
  passport.authenticate("windowslive", {
    scope: ["profile"],
  })
);

// callback route for outlook to redirect to

router.get(
  "/outlook/redirect",
  passport.authenticate("windowslive"),
  (req, res) => {
    // res.send("you have reached callbak url");
    res.redirect("http://localhost:3000/");
  }
);

module.exports = router;
