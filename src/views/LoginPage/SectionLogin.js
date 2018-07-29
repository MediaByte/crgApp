import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Card from "../../components/card/Card.jsx";
import CardBody from "../../components/card/CardBody.jsx";
import CardHeader from "../../components/card/CardHeader.jsx";
import CardFooter from "../../components/card/CardFooter.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import loginStyle from "../../assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx";
//Javascript library for CSS
import 'tachyons'
//Javascript framework for single page application routing
import { NavLink } from 'react-router-dom';

class SectionLogin extends React.Component {
    constructor() {
      super();
      this.state = {
        cardAnimaton: "cardHidden"
      }
    }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, onSubmitLogin, toggleSession, userValid } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes[this.state.cardAnimaton]}>
            <CardHeader color="danger" className={classes.cardHeader}>
                <h4>Login</h4>
            </CardHeader>
              <NavLink to='/rentals'>
                <Typography align='center' color='secondary' variant='body2'>
                  <div style={{marginTop: 30, marginBottom: 10}}>
                    Don't have an account? Register here.
                  </div>
                </Typography>
              </NavLink>
              <form className={classes.form}>
                <CardBody>
                <div className={classes.form}>
                <InputLabel>Email</InputLabel>
                  <Input
                    fullWidth
                    autoComplete='email'
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
                <div style={{marginTop: 20}} className={classes.form}>
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                  fullWidth
                  id="adornment-password"
                  type={this.props.showPassword ? 'text' : 'password'}
                  autoComplete='current-password'
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
                <CardFooter className={classes.cardFooter}>
                  <Button onClick={() => onSubmitLogin(toggleSession, userValid)} simple color="danger" size="lg">
                    Get started
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(loginStyle)(SectionLogin);
