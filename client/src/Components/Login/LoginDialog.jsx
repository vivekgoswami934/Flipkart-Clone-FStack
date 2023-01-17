import React, { useState, useContext } from "react";
import {
  Button,
  Dialog,
  TextField,
  Typography,
  Box,
  styled,
} from "@mui/material";
import { authenticateLogin, authenticateSignup } from "../../service/api";
import { DataContext } from "../../Context/DataProvider";
import { useDispatch } from "react-redux";
import {  getCartDataFirst } from "../../Redux/actions/cartAction";

const toggleValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders,Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signUpData = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginData = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const dispatch = useDispatch()
  /////////////////////////////////////////////////////////////
  const [account, toggleAccount] = useState(toggleValues.login);
  const [signup, setSignup] = useState(signUpData);
  const [login, setLogin] = useState(loginData);
  const [error, setError] = useState(false);
  //////////////////////////////////////////////////////////////
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  ///////////////////////////////////////////////////////////
  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    // setAccount(signup.firstname);
  };
  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    // console.log(response.data.data._doc.firstname);
    // console.log(response.data.data.token);

    if (response.status === 200) {
      if (localStorage.getItem("flipKartToken")) {
        localStorage.removeItem("flipKartToken");
      }
      console.log(1)
      console.log(2)
      localStorage.setItem("flipKartToken", response.data.data.token);
      console.log(3)
      dispatch(getCartDataFirst(response.data.data.token))
      console.log(4)
      handleClose();
      setAccount(response.data.data._doc.firstname);
    } else {
      setError(true);
    }
  };

  /////////////////////////////////////////////////////////
  const toggleSignup = () => {
    toggleAccount(toggleValues.signup);
  };

  const handleClose = () => {
    setOpen(!open);
    toggleAccount(toggleValues.login);
    setError(false);
  };

  const { setAccount } = useContext(DataContext);

  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{}}>{account.subHeading}</Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Username"
                name="username"
                onChange={(e) => {
                  onValueChange(e);
                }}
              />
              {error && <Error>Please Enter valid name or password</Error>}
              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                onChange={(e) => {
                  onValueChange(e);
                }}
              />
              <Text>
                By continuing , you agree to flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton
                onClick={() => {
                  loginUser();
                }}
              >
                Login
              </LoginButton>
              <Typography style={{ textAlign: "center", fontweight: "550" }}>
                OR
              </Typography>
              <OtpButton>Request OTP</OtpButton>
              <CreateAccountText onClick={toggleSignup}>
                New to Flipkart ?Create an account
              </CreateAccountText>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                label="First Name"
                name="firstname"
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
              <TextField
                variant="standard"
                label="Last Name"
                name="lastname"
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
              <TextField
                variant="standard"
                label="username"
                name="username"
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
              <TextField
                variant="standard"
                label="Email"
                name="email"
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
              <TextField
                variant="standard"
                label="Mobile No"
                name="phone"
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
              <LoginButton onClick={signupUser}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 90% no-repeat;
  height: 75%;
  width: 40%;
  padding: 45px 45px;
  flex: 1;
  /* border: 2px solid black; */
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1.8;
  & > div,
  & button,
  & p {
    margin-top: 10px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 3px;
`;
const OtpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/25%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccountText = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  font-weight: 600;
  line-height: 0;
  margin-top: 10;
`;

export default LoginDialog;
