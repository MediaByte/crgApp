import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import People from "@material-ui/icons/People";
import LockOutline from "@material-ui/icons/LockOutline";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/card/Card.jsx";
import CardBody from "../../components/card/CardBody.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import CardHeader from "../../components/card/CardHeader.jsx";

import loginStyle from "../../assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx";

class SectionRegister extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

 onNameChange = (event) => {
    this.setState({ name: event.target.value })
    console.log(this.state.name)
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value })
    console.log(this.state.email)
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value })
    console.log(this.state.password)
  }

  onSubmitRegister = () => {
    fetch('http://localhost:4000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user) {
          console.log(user);
        }
      })
  }  

  render() {
    const { classes } = this.props;
    return (
        <div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12}>
              <Card>
              <CardHeader color="danger" className={classes.cardHeader}>
                    <h4>Regster</h4>
              </CardHeader>
                <div className={classes.form}>
                  <CardBody>
                    <CustomInput
                      labelText="Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (event) => this.onNameChange(event),
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (event) => this.onEmailChange(event),
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: (event) => this.onPasswordChange(event),
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOutline className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                </div>
              </Card>
            </GridItem>
          </GridContainer>
        </div>

    );
  }
}

export default withStyles(loginStyle)(SectionRegister);
