import React from "react";

import { Button, TextField } from "@mui/material";
import { AppLoginCon } from "./skins";
import axios from "axios";

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let req = { email, password, admin: true };
    axios.get(`http://localhost:8000/user/login`, req).then((res) => {
      console.log("Response: ", res);
    });
  }
  render() {
    return (
      <AppLoginCon>
        <div className="alogin">
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
            <Button onClick={this.login} variant="contained">
              Login
            </Button>
          </div>
        </div>
      </AppLoginCon>
    );
  }
}

export default AdminLogin;
