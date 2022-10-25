const { UserModel } = require("../Models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/////////////////////// signup//////////////////////////////////////
const userSignup = async (req, res) => {
  // console.log(req.body);
  const { username, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);
    // console.log(req.body.username);
    const exist = await UserModel.findOne({ username: username });
    // console.log(exist);
    if (exist)
      return res.status(401).json({ message: "username alreday exist" });

    const user = new UserModel({ ...req.body, password: hashedPassword });

    // const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.status(200).json({ message: user });
  } catch (error) {
    console.log("userSignup controller error", error.message);
    res.status(500).json({ message: error.message });
  }
};
/////////////////////// login ////////////////////////////////////////
const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await UserModel.findOne({
      username: username,
    });
        console.log("username")
        if (!user) return res.status(400).json("Username not found in database");
        
        const validate = await bcrypt.compare(password, user.password);
        console.log("password",validate)

    if (!validate) return res.status(400).json("Wrong Password");

    const token = jwt.sign({ userId: user._id }, "VIVEKGOSWAMI");
       console.log(token)

       const payload = {
        ...user , token : token , password : ""
       }
       console.log(payload)
    if (token) return res.status(200).json({ data: payload });
    else return res.status(401).json("Invalid Password");

    // res.status(200).json({message : "Login Successful" , token })
    //  if (token) return res.status(200).json({ data: token });
    // else return res.status(401).json("Invalid Credentials");
  } catch (error) {
    res.status(500).json("Error at catch login while backend", error.message);
  }
};

module.exports = { userSignup, userLogin };
