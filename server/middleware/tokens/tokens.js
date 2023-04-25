const { sign, verify } = require("jsonwebtoken");

require("dotenv").config();

const verifyAccessToken = (req, res, next) => {
  try {
    if (!req.headers.token) throw new Error("Please Log in again");

    const {
      headers: { token },
    } = req;

    const { _id, user } = verify(token, process.env.MY_SECRET_KEY);

    if (!_id) throw new Error("Please Log in again");

    if (!user) throw new Error("Unauthorized action, unknown role.");

    req.body.id = _id;

    user ? (req.body.user = user) : null;

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
