const { UserModel } = require("../Models/userSchema");

const userSignup = async (req, res) => {
  // console.log(req.body);
  try {
    const exist = UserModel.findOne({ username: req.body.username });
    console.log(exist)
    // if (exist)
    //   return res.status(401).json({ message: "username alreday exist" });
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.status(200).json({ message: user });
  } catch (error) {
    console.log("userSignup controller error", error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { userSignup };
