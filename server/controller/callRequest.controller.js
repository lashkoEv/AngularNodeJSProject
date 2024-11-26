const { CallRequest } = require('../model/callRequest.model');

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'zarubinmihail99@gmail.com',
    pass: 'amrg mqda fyno udmo',
  },
  // pass for nodemailer
});

async function getAll(req, res) {
  try {
    const callRequests = await CallRequest.find();

    console.log('Found:', callRequests);

    return res.send(callRequests);
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function getById(req, res) {
  try {
    const callRequest = await CallRequest.findOne({ _id: req.body.id });

    console.log('Found:', callRequest);

    return res.send(callRequest);
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function add(req, res) {
  try {
    const callRequest = new CallRequest({
      name: req.body.name,
      phone: req.body.phone,
    });

    const callRequestMailOptions = {
      from: 'zarubinmihail99@gmail.com',
      to: 'ipstorg@gmail.com', // , изменить на эмейл отца
      subject: 'Нове замовлення виклику на телефон',
      text: `Ім'я :${callRequest.name}.
      Номер телефону: ${callRequest.phone}
      `,
    };

    await callRequest.save();

    transporter.sendMail(callRequestMailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: error.toString() });
      }
      console.log('email sent:', info.response);
    });

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
    await CallRequest.deleteOne({ _id: req.body.id });

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
    await CallRequest.updateOne(
      { _id: req.body._id },
      {
        name: req.body.name,
        phone: req.body.phone,
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
