import React from "react";

import { Alert, Button, Stack, TextField } from "@mui/material";
import { AppSignUpCon } from "./skins";
import { Link } from "react-router-dom";
import axios from "axios";
import { env } from "../commons/env";

class AdminSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
    this.signup = this.signup.bind(this);
  }

  signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let req = { name, email, password, admin: true };
    axios
      .post(`${env.API_URL}/user/signup`, req)
      .then((res) => {
        console.log("Response: ", res);
      })
      .catch((err) => {
        console.log("Error: ", err);
        this.setState({ isError: true });
      });
  }
  render() {
    return (
      <AppSignUpCon isError={this.state.isError}>
        <div className="a_signup">
          <Alert severity="error" className="alert-popup">
            Username already Exists!
          </Alert>
          <div className="a_field">
            <TextField id="name" variant="outlined" label="Name" type="Name" />
          </div>
          <div className="a_field">
            <TextField
              id="email"
              variant="outlined"
              label="Email"
              type="email"
            />
          </div>
          <div className="a_field">
            <TextField
              id="password"
              variant="outlined"
              label="Password"
              type="password"
            />
          </div>
          <div className="a_button">
            <Button onClick={this.signup} variant="contained">
              Signin
            </Button>
          </div>
        </div>
      </AppSignUpCon>
    );
  }
}

export default AdminSignUp;
