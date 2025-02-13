const { Order } = require('../model/order.model');
const { transporter } = require('./order.controller');

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

    const customerMailOption = {
      from: 't24848576@gmail.com',
      to: orderData.email,
      subject: 'Підтвердження замовлення',
      text: `Дякуємо за замовляння, ${orderData.nameAndLastName}. Ваше замовлення:  №${orderData.id} успішно оформленно.`,
    };

    // const cartItems = orderData.cart
    //   .map(
    //     (item) =>
    //       `Товар: ${item.title}, Кількість: ${item.count}, Ціна: ${item.wholesalePrice}`
    //   )
    //   .join('\n');
    const sellerMailOptions = {
      from: 't24848576@gmail.com',
      to: 'zetsu223@gmail.com',
      subject: 'Нове замовлення',
      text: `Нове замовлення від ${orderData.nameAndLastName}. Деталі замовлення: 
      ID: ${orderData.id}
      Ім'я та Прізвище: ${orderData.nameAndLastName}
      Номер телефону: ${orderData.phoneNumber}
      Місто: ${orderData.city.CityDescription}
      Адреса доставки: ${orderData.deliveryAddress.Description}
      Спосіб доставки: ${orderData.typeOfDelivery.type}
      Кошик: ${cartItems}
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
