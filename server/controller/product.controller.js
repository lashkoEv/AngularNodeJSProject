const { Product } = require('../model/product.model');
const fs = require('fs').promises;

async function getAll(req, res) {
  try {
    const products = await Product.find();

    console.log('Found:', products);

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

    console.log('Found:', product);

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
      wholesalePrice: req.body.wholesalePrice,
      retailPrice: req.body.retailPrice,
      count: req.body.count,
      fields: req.body.fields,
      category: req.body.category,
      imgSrc: req.body.imgSrc,
    });

    await product.save();

    return res.send({ ok: 'ok' });
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}
async function deleteById(req, res) {
  try {
    const product = await Product.findOne({ _id: req.body.id });
    if (!product) {
      return res.status(404).send({ error: 'Product not found' });
    }

    const imagePath = product.imgSrc;

    await Product.deleteOne({ _id: req.body.id });
    if (imagePath) {
      try {
        await fs.unlink(imagePath.replace('http://localhost:3000/', ''));
      } catch (error) {
        if (error.code === 'ENOENT') {
          console.log(`File ${imagePath} not found. Continuing...`);
        } else {
          throw error;
        }
      }
    }

    return res.send({ ok: 'ok' });
  } catch (error) {
    console.error(`Error: ${error}`);
    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function updateById(req, res) {
  try {
    const product = await Product.findOne({ _id: req.body._id });
    const oldImagePath = product.imgSrc;
    await Product.updateOne(
      { _id: req.body._id },
      {
        title: req.body.title,
        description: req.body.description,
        country: req.body.country,
        wholesalePrice: req.body.wholesalePrice,
        retailPrice: req.body.retailPrice,
        count: req.body.count,
        fields: req.body.fields,
        category: req.body.category,
        imgSrc: req.body.imgSrc,
      }
    );

    if (oldImagePath) {
      const imageURL = oldImagePath.replace('http://localhost:3000/', '');
      try {
        await fs.unlink(imageURL);
      } catch (error) {
        if (error.code === 'ENOENT') {
          console.log(`File ${imageURL} not found. Continuing...`);
        } else {
          throw error;
        }
      }
    }

    return res.send({ ok: 'ok' });
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function getByCategory(req, res) {
  try {
    const products = await Product.find({ category: req.body.category });

    console.log('Found:', products);

    return res.send(products);
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
  getByCategory,
  add,
  deleteById,
  updateById,
};
