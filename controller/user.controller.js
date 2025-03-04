const { User } = require("../model/user.model");

async function authorize(req, res) {
  try {
    console.log("Request body:", req.body);
    const user = await User.findOne({
      login: req.body.login,
      password: req.body.password,
      // isAdmin: req.body.isAdmin
    });

    console.log("Found:", user);

    return res.send(user);
  } catch (error) {
    console.error(`Error: ${error}`);

    return res
      .status(500)
      .send({ error: `Failed to complete the request! Error: ${error}` });
  }
}

async function register(req, res) {
  try {
    const user = new User({
      login: req.body.login,
      password: req.body.password,
      isAdmin: req.body.isAdmin,
    });

    await user.save();

    return res.send(user);
  } catch (error) {
    console.error("Error: ${error}");

    return res
      .status(500)
      .send({ error: "Failed to complete the request! Error: ${error}" });
  }
}

async function changePassword(req, res) {
  try {
    await User.updateOne(
      { _id: req.body._id },
      {
        password: req.body.password,
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
  authorize,
  register,
  changePassword,
};
