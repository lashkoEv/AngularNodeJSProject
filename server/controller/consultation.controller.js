const { Consultation } = require("../model/consultation.model");

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

    const adminOptions = {
      from: "zarubinmihail99@gmail.com",
      to: "zarubinmihail99@gmail.com",
      subject: "Новий запит на консультацію",
      text: `Новий запит на консультацію від ${consultationData.email}. Тема: ${consultationData.topic}. Повідомлення: ${consultationData.message}`,
    };

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

    console.log("Found:", consultations);

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

    console.log("Found:", consultation);

    return res.send(consultation);
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
    await Consultation.updateOne(
      { _id: req.body._id },
      {
        email: req.body.email,
        topic: req.body.topic,
        message: req.body.message,
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
