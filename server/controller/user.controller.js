const { User } = require("../model/user.model");

async function authorize(req, res) {
  try {
    const user = await User.findOne({
      login: req.body.login,
      password: req.body.password,
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

module.exports = {
  authorize,
};
