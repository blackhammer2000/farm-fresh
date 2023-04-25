const router = require("express").Router();

const {
  ObjectId: { isValid },
} = require("mongodb");

const {
  signAccessToken,
  verifyAccessToken,
} = require("../middlewares/tokens/jwt_auth");

router.post("/api/farmfresh/user/login", async (req, res) => {
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

    const generatedToken = await signAccessToken(userData);

    res.status(200).json({
      message: "login successful",
      response_status: "success",
      token: generatedToken,
    });
  } catch (err) {
    if (err?.message)
      res.status(500).json({ error: err?.message, response_status: "danger" });
  }
});

router.post("/api/farmfresh/create/product", async (req, res) => {
  try {
    if (!req.body.product) throw new Error("missing product to add");

    const {
      body: { product },
    } = req;

    const isProductRegistered = await Product.findOne({ name: product.name });

    if (isProductRegistered)
      throw new Error("Product has already been registered.");

    const createNewProduct = await Product.create(product);

    if (!createNewProduct)
      throw new Error("Error when adding the product to the database.");

    res.status(201).json({
      messsage: "product added successfully",
      response_status: "success",
    });
  } catch (err) {
    if (err.message)
      res.status(500).json({ error: err.message, response_status: "danger" });
  }
});

router.get("/api/farmfresh/read/products", async (req, res) => {
  try {
    const allProducts = await Product.find();

    if (!allProducts) throw new Error("No product in your database.");

    res.status(200).json({ products: allProducts, response_status: "success" });
  } catch (err) {
    if (err.message) {
      res.status(500).json({ error: err.message, response_status: "danger" });
    }
  }
});

router.patch("/api/farmfresh/update/product", async (req, res) => {
  try {
    if (!req.body.product) throw new Error("missing product to update");

    const {
      body: { product },
    } = req;

    const isProductRegistered = await Product.findOne({ name: product.name });

    if (!isProductRegistered)
      throw new Error("Product has not been registered.");

    const updateProduct = await Product.findOneAndUpdate(
      { name: product.name },
      { $set: product }
    );

    if (!updateProduct)
      throw new Error("Error when updating the product to the database.");

    res.status(201).json({
      messsage: "product updated successfully",
      response_status: "success",
    });
  } catch (err) {
    if (err.message)
      res.status(500).json({ error: err.message, response_status: "danger" });
  }
});
