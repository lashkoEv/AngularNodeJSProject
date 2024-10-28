const { CallRequest } = require("../model/callRequest.model");

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "zarubinmihail99@gmail.com",
    pass: "amrg mqda fyno udmo",
  },
});

async function add(req, res) {
  const callData = req.body;
  console.log(callData);
  try {
    const call = new CallRequest({
      name: callData.name,
      phone: callData.phone,
    });

    const adminOptions = {
      from: "zarubinmihail99@gmail.com",
      to: "ipstorg@gmail.com", // изменить на эмейл отца
      subject: "Новий запит на дзвінок",
      text: `Новий запит на звінок від ${callData.name}. Телефон: ${callData.phone}`,
    };

    await call.save();
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
    const callRequests = await CallRequest.find();

    console.log("Found:", callRequests);

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

    console.log("Found:", callRequest);

    return res.send(callRequest);
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

// async function add(req, res) {
//   try {
//     const callRequest = new CallRequest({
//       name: req.body.name,
//       phone: req.body.phone,
//     });

//     await callRequest.save();

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
    await CallRequest.deleteOne({ _id: req.body.id });

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
    await CallRequest.updateOne(
      { _id: req.body._id },
      {
        name: req.body.name,
        phone: req.body.phone,
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
