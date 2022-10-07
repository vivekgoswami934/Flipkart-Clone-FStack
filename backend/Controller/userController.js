const { UserModel } = require("../Models/userSchema");

const userSignup = async (req, res) => {
  // console.log(req.body);
  try {
    console.log(req.body.username);
    const exist = await UserModel.findOne({ username: req.body.username });
    // console.log(exist);
    if (exist)
      return res.status(401).json({ message: "username alreday exist" });
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.status(200).json({ message: user });
  } catch (error) {
    console.log("userSignup controller error", error.message);
    res.status(500).json({ message: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await UserModel.findOne({
      username: username,
      password: password,
    });

    if (user) return res.status(200).json({data : user});
    else return res.status(401).json("Invalid Credentials");
  } catch (error) {
    res.status(500).json("Error at catch login while backend", error.message);
  }
};

module.exports = { userSignup, userLogin };
