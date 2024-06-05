const { Order } = require('../model/order.model');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 't24848576@gmail.com',
    pass: 'tlox eaxi agvu efzx',
  },
  // pass for nodemailer
});

async function add(req, res) {
  const orderData = req.body;
  console.log(orderData);
  try {
    const order = new Order({
      id: orderData.id,
      nameAndLastName: orderData.nameAndLastName,
      phoneNumber: orderData.phoneNumber,
      city: orderData.city,
      email: orderData.email,
      message: orderData.message,
      typeOfDelivery: orderData.typeOfDelivery,
      deliveryAddress: orderData.deliveryAddress,
      cart: orderData.cart,
    });

    const mailOption = {
      from: 't24848576@gmail.com',
      to: orderData.email,
      subject: 'Підтвердження замовлення',
      text: `Дякуємо за замовляння, ${orderData.nameAndLastName}. Ваше замовлення:  №${orderData.id} успішно оформленно.`,
    };
    await order.save();
    return transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: error.toString() });
      }
      console.log('Email sent:', info.response);
      res.status(200).json({
        message: 'Order placed and email sent',
        response: info.response,
      });
    });

    // return res.send({ ok: 'ok' });
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function getAll(req, res) {
  try {
    const orders = await Order.find();

    console.log('Found:', orders);

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

    console.log('Found:', order);

    return res.send(order);
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

    return res.send({ ok: 'ok' });
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

// t24848576@gmail.com  email
// H8fY3zK#1Qw@2Lp9 password - email
