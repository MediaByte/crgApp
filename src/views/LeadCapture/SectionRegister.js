import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// @material-ui/icons
import People from "@material-ui/icons/People";
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
      name: '',
      showPassword: false,
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

    handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

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
              <CardHeader color="danger" style={{marginTop: 10}} className={classes.cardHeader}>
                  <h4>Regster</h4>
              </CardHeader>
                <div className={classes.form}>
                  <CardBody>
                  <div style={{margin: 20}}>
                  <InputLabel>Name</InputLabel>
                  <Input
                    fullWidth
                    id="name"
                    type='text'
                    onChange={this.onNameChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                          <People />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  </div>
                  <div style={{margin: 20}}>
                  <InputLabel>Email</InputLabel>
                  <Input
                    fullWidth
                    id="email"
                    type='text'
                    onChange={this.onEmailChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton>
                          <Email />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  </div>
                  <div style={{margin: 20}}>
                  <InputLabel htmlFor="adornment-password">Password</InputLabel>
                  <Input
                    fullWidth
                    id="adornment-password"
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={this.state.password}
                    onChange={this.onPasswordChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  </div>
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
