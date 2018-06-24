import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
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
import CardHeader from "../../components/card/CardHeader.jsx";

import loginStyle from "../../assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx";
import 'tachyons'
import { Link } from 'react-router-dom'

class SectionRegister extends React.Component {
  
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
            <p className='center'><Link to='/login'>Have an account? Login here.</Link></p>
              <div className={classes.form}>
                <CardBody>
                <div style={{margin: 20}}>
                <InputLabel>Name</InputLabel>
                <Input
                  fullWidth
                  id="name"
                  type='text'
                  onChange={this.props.onNameChange}
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
                  onChange={this.props.onEmailChange}
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
                  type={this.props.showPassword ? 'text' : 'password'}
                  value={this.props.password}
                  onChange={this.props.onPasswordChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.props.handleClickShowPassword}
                        onMouseDown={this.props.handleMouseDownPassword}
                      >
                        {this.props.showPassword ? <VisibilityOff /> : <Visibility />}
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
