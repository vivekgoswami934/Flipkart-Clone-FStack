import React, { useState } from "react";
import {
  Button,
  Dialog,
  TextField,
  Typography,
  Box,
  styled,
} from "@mui/material";
import { authenticateSignup } from "../../service/api";

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

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(toggleValues.login);
  const [signup, setSignup] = useState(signUpData);
  const [login, setLogin] = useState();

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
  };

  /////////////////////////////////////////////////
  const toggleSignup = () => {
    toggleAccount(toggleValues.signup);
  };

  const handleClose = () => {
    setOpen(!open);
    toggleAccount(toggleValues.login);
  };

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
              <TextField variant="standard" label="Enter Email/Mobile No" />
              <TextField variant="standard" label="Enter Password" />
              <Text>
                By continuing , you agree to flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton>Signup</LoginButton>
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

export default LoginDialog;
