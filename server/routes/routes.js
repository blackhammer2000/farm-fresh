const router = require("express").Router();

const {
  ObjectId: { isValid },
} = require("mongodb");

const {
  signAccessToken,
  verifyAccessToken,
} = require("../middlewares/tokens/jwt_auth");

router.post(
  "/api/institutions/user/login",
  loginValidator,
  async (req, res) => {
    try {
      if (!req?.body?.email || !req?.body?.password)
        throw new Error("Provide all the necessary credentials");

      const { email, password } = req?.body;

      const encryptedPassword = encrypt(password);

      const user = await Institute?.findOne({
        email: email,
      });

      if (!user) throw new Error("Incorrect Email or Password.");

      const { _id, subscription } = user;

      const isSubscriptionExpired = checkSubscriptionExpiry(subscription);

      if (isSubscriptionExpired && typeof isSubscriptionExpired === "object")
        throw new Error(isSubscriptionExpired?.error);

      const passwordMatch = await compare(encryptedPassword, user?.password);

      if (!passwordMatch) throw new Error("Incorrect Email or Password.");

      const userData = { _id, subscription, user: true };

      const generatedToken = await accessToken(userData);

      res.status(200).json({
        message: "login successful",
        response_status: "success",
        token: generatedToken,
      });
    } catch (err) {
      if (err?.message)
        res
          .status(500)
          .json({ error: err?.message, response_status: "danger" });
    }
  }
);
