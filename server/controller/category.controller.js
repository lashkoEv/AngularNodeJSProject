const { Category } = require("../model/category.model");
const fs = require("fs").promises;
async function getAll(req, res) {
  try {
    const categories = await Category.find();

    console.log("Found:", categories);

    return res.send(categories);
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function getById(req, res) {
  try {
    const category = await Category.findOne({ _id: req.body.id });

    console.log("Found:", category);

    return res.send(category);
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function add(req, res) {
  try {
    const category = new Category({
      title: req.body.title,
      description: req.body.description,
      imgSrc: req.body.imgSrc,
    });

    await category.save();

    return res.send({ ok: "ok" });
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error} ` });
  }
}

async function deleteById(req, res) {
  try {
    const category = await Category.findOne({ _id: req.body.id });
    await Category.deleteOne({ _id: req.body.id });
    if (!category) {
      return res.status(404).send({ error: "Category not found" });
    }
    const imagePath = category.imgSrc;

    if (imagePath) {
      try {
        await fs.unlink(imagePath.replace("http://localhost:3000/", ""));
      } catch (error) {
        if (error.code === "ENOENT") {
          console.log(`File ${imagePath} not found. Continuing...`);
        } else {
          throw error;
        }
      }
    }

    return res.send({ ok: "ok" });
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error} ` });
  }
}

async function updateById(req, res) {
  try {
    const category = await Category.findOne({ _id: req.body._id });
    const oldImagePath = category.imgSrc;
    await Category.updateOne(
      { _id: req.body._id },
      {
        title: req.body.title,
        description: req.body.description,
        imgSrc: req.body.imgSrc,
      }
    );

    if (oldImagePath) {
      const imageURL = oldImagePath.replace("http://localhost:3000/", "");
      try {
        await fs.unlink(imageURL);
      } catch (error) {
        if (error.code === "ENOENT") {
          console.log(`File ${imageURL} not found. Continuing...`);
        } else {
          throw error;
        }
      }
    }

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
  deleteById,
  updateById,
};
