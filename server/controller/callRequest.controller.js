const { CallRequest } = require("../model/callRequest.model");

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

async function add(req, res) {
  try {
    const callRequest = new CallRequest({
      name: req.body.name,
      phone: req.body.phone,
    });

    await callRequest.save();

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
