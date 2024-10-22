const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("./bot");

const productRouter = require("./routes/product.router");
const categoryRouter = require("./routes/category.router");
const userRouter = require("./routes/user.router");
const callRequestRouter = require("./routes/callRequest.router");
const consultationRouter = require("./routes/consultation.router");
const orderRouter = require("./routes/order.router");
const deliveryRouter = require("./routes/delivery.router");
const multer = require("multer");
let imageUrl;
const cartRouter = require("./routes/cart.router");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:3000",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "",
    },
  })
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueName = Math.random() + file.originalname;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage: storage });
connect();

app.use("/uploads", express.static("uploads"));
app.use("", productRouter);
app.use("", callRequestRouter);
app.use("", consultationRouter);
app.use("", categoryRouter);
app.use("", userRouter);
app.use("", cartRouter);
app.use("", orderRouter);
app.use("", deliveryRouter);
app.use(upload.single("imgSrc"));

// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

app.post("/upload", (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  let imagePath = req.file.path;
  imageUrl = imagePath;
  res.json({ imageUrl: imagePath });
});

app.use("/", (req, res) => {
  return res.json({
    msg: "Hello server",
  });
});

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://dbMichael:XLkfFEF4vHbXESex@cluster0.rr2pz7s.mongodb.net/InterPlastService?retryWrites=true&w=majority&appName=Cluster0"
    );
  } catch (e) {
    console.log("[e.message]", e.message);
  }
}

module.exports = {
  app,
  imageUrl,
};
