const { sign, verify } = require("jsonwebtoken");

require("dotenv").config();

const verifyAccessToken = (req, res, next) => {
  try {
    if (!req.headers.token) throw new Error("Please Log in again");

    const {
      headers: { token },
    } = req;

    const { _id, subscription, user, admin } = verify(
      token,
      process.env.MY_SECRET_KEY
    );

    if (!_id || (!subscription && user)) throw new Error("Please Log in again");

    if (!admin && !user) throw new Error("Unauthorized action, unknown role.");

    const isSubscriptionExpired = user
      ? checkSubscriptionExpiry(subscription)
      : null;

    if (
      user &&
      isSubscriptionExpired &&
      typeof isSubscriptionExpired === "object"
    )
      throw new Error(isSubscriptionExpired?.error);

    req.body.id = _id;

    user ? (req.body.user = user) : admin ? (req.body.admin = admin) : null;

    delete req.headers.token;

    next();
  } catch (err) {
    if (
      err?.message === ("jwt expired" || "invalid token" || "jwt malformed")
    ) {
      res.status(403).json({ error: "session expired" });
    } else {
      res.status(500).json({ error: err?.message });
    }
  }
};

const signAccessToken = (userData) => {
  return new Promise((resolve, reject) => {
    const token = sign(userData, process.env.MY_SECRET_KEY, {
      expiresIn: "15min",
      issuer: "textbookmanager inc.",
      audience: `${userData}`,
    });

    if (!token) reject(token);
    resolve(token);
  });
};

module.exports = signAccessToken;

module.exports = { signAccessToken, verifyAccessToken };
