import React from "react";

import { Button, TextField } from '@mui/material';
import {AppSignUpCon} from './skins';
import { Link } from "react-router-dom";

class AdminSignUp extends React.Component{
    constructor(props){
        super(props);
    }

    signup(){
        
    }
    render(){
        return( 
            <AppSignUpCon>
            <div className="a_signup">
            <div className="a_field">
                <TextField id="name" variant="outlined" label="Name" type="Name" />
                </div>
                <div className="a_field">
                <TextField id="email" variant="outlined" label="Email" type="email" />
                </div>
                <div className="a_field">
                <TextField id="password" variant="outlined" label="Password" type="password" />
                </div>
                <div className="a_button">
                    <Button onClick={this.signup()} variant="contained">Signin</Button>
                </div>
            </div>
            </AppSignUpCon>
        )
    }
}

export default AdminSignUp;