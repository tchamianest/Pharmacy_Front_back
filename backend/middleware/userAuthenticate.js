import passport from "../config/passport.config.js";

const authenticat = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, async (error, user) => {
   
    if (!user) {
      return res.status(401).json({ error: "you are not loggged in" });
    }
    if (error) {
      res
        .status(500)
        .json({ error: "check there is error happening when you logged in" });
    }

    const loggedUser = user;
    req.user = loggedUser;

    return next();
  })(req, res, next);
};

export default authenticat;
