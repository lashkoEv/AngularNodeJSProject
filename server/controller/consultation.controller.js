const { Consultation } = require('../model/consultation.model');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'zarubinmihail99@gmail.com',
    pass: 'amrg mqda fyno udmo',
  },
  // pass for nodemailer
});

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "zarubinmihail99@gmail.com",
    pass: "amrg mqda fyno udmo",
  },
});

async function add(req, res) {
  const consultationData = req.body;
  console.log(consultationData);
  try {
    const consultation = new Consultation({
      email: consultationData.email,
      topic: consultationData.topic,
      message: consultationData.message,
    });


    console.log('Found:', consultations);


    await consultation.save();
    transporter.sendMail(adminOptions, (error, info) => {
      if (error) {
        console.error("Error sending email to admin:", error);
        return res.status(500).json({ error: error.toString() });
      }
      console.log("Admin notified:", info.response);
      res.status(200).json({
        message: "Call request placed and admin notified",
        response: info.response,
      });
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function getAll(req, res) {
  try {
    const consultations = await Consultation.find();


    console.log('Found:', consultation);


    return res.send(consultations);
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function getById(req, res) {
  try {
    const consultation = await Consultation.findOne({ _id: req.body.id });


    const consultationMailOptions = {
      from: 'zarubinmihail99@gmail.com',
      to: 'ipstorg@gmail.com', // , изменить на эмейл отца
      subject: 'Нове замовлення консультації по емейл',
      text: `Емейл :${consultation.email}.
      Тема: ${consultation.topic}.
      Повідомлення: ${consultation.message}.
      `,
    };

    await consultation.save();

    transporter.sendMail(consultationMailOptions, (error, info) => {
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

// async function add(req, res) {
//   try {
//     const consultation = new Consultation({
//       email: req.body.email,
//       topic: req.body.topic,
//       message: req.body.message,
//     });

//     await consultation.save();

//     return res.send({ ok: "ok" });
//   } catch (error) {
//     console.error(`Error: ${error}`);

//     return res
//       .status(500)
//       .send({ error: `Failed to complete the request! Error: ${error}` });
//   }
// }

async function deleteById(req, res) {
  try {
    await Consultation.deleteOne({ _id: req.body.id });

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
    await Consultation.updateOne(
      { _id: req.body._id },
      {
        email: req.body.email,
        topic: req.body.topic,
        message: req.body.message,
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
