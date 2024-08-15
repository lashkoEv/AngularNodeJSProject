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
      status: orderData.status,
    });

    let cartItems;
    try {
      cartItems = orderData.cart.products
        .map(
          (product) =>
            `Товар: ${product.product.title}, Кількість: ${product.count}, Ціна: ${product.product.wholesalePrice}`
        )
        .join('\n');
    } catch (cartError) {
      console.error('Error processing cart items:', cartError);
      return res.status(500).json({
        error: `Failed to process cart items: ${cartError.toString()}`,
      });
    }

    const customerMailOption = {
      from: 't24848576@gmail.com', // изменить на настоящий вместо тестового
      to: orderData.email,
      subject: 'Підтвердження замовлення',
      text: `Дякуємо за замовляння, ${orderData.nameAndLastName}. Ваше замовлення:  №${orderData.id} успішно оформленно.`,
    };

    const sellerMailOptions = {
      from: 't24848576@gmail.com',
      to: 'zetsu223@gmail.com', // изменить на эмейл отца
      subject: 'Нове замовлення',
      text: `Нове замовлення від ${orderData.nameAndLastName}. Деталі замовлення: 
      ID: ${orderData.id}
      Ім'я та Прізвище: ${orderData.nameAndLastName}
      Номер телефону: ${orderData.phoneNumber}
      Місто: ${orderData.city.CityDescription}
      Адреса доставки: ${orderData.deliveryAddress.Description}
      Спосіб доставки: ${orderData.typeOfDelivery.type}
      Кошик: ${cartItems}
      Сума:${orderData.cart.totalPrice}
      Повідомлення: ${orderData.message}`,
    };

    await order.save();
    transporter.sendMail(customerMailOption, (error, info) => {
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

    transporter.sendMail(sellerMailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email to seller:', error);
        return res.status(500).json({ error: error.toString() });
      }
      console.log('Seller email sent:', info.response);
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
        status: req.body.status,
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
