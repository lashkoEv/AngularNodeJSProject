const { Order } = require("../model/order.model");

async function getAll(req, res) {
  try {
    const orders = await Order.find();

    console.log("Found:", orders);

    return res.send(orders);
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function getById(req, res) {
  try {
    const order = await Order.findOne({ _id: req.body.id });

    console.log("Found:", order);

    return res.send(order);
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function add(req, res) {
  try {
    const order = new Order({
      nameAndLastName: req.body.nameAndLastName,
      phoneNumber: req.body.phoneNumber,
      city: req.body.city,
      email: req.body.email,
      message: req.body.message,
      typeOfDelivery: req.body.typeOfDelivery,
      deliveryAddress: req.body.deliveryAddress,
      cart: req.body.cart,
    });

    await order.save();

    return res.send({ ok: "ok" });
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function deleteById(req, res) {
  try {
    await Order.deleteOne({ _id: req.body.id });

    return res.send({ ok: "ok" });
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function updateById(req, res) {
  try {
    await Order.updateOne(
      { _id: req.body._id },
      {
        nameAndLastName: req.body.nameAndLastName,
        phoneNumber: req.body.phoneNumber,
        city: req.body.city,
        email: req.body.email,
        message: req.body.message,
        cart: req.body.cart,
      }
    );

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
