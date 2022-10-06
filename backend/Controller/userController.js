


const userSignup = (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log("userSignup controller error" , error.message)
  }
};

module.exports = { userSignup };
