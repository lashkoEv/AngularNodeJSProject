const { Product } = require("../model/product.model");

async function getAll(req, res) {
  try {
    const products = await Product.find();

    console.log("Found:", products);

    return res.send(products);
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function getById(req, res) {
  try {
    const product = await Product.findOne({ _id: req.body.id });

    console.log("Found:", product);

    return res.send(product);
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function add(req, res) {
  try {
    const product = new Product({
      title: req.body.title,
      description: req.body.description,
      country: req.body.country,
      price: req.body.price,
      count: req.body.count,
      fields: req.body.fields,
      category: req.body.category,
      imgSrc: req.body.imgSrc,
    });

    await product.save();

    return res.send({ ok: "ok" });
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

module.exports = {
  getAll,
  getById,
  add,
};
