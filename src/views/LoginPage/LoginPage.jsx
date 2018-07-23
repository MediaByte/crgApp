import React from 'react';

//State Management
import { connect } from 'react-redux';
import { isUserAuthorized } from '../../state/actions';

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "../../components/Header/Header.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Footer from "../../components/Footer/Footer.jsx";

//Project Components
import SectionLogin from './SectionLogin';

import image from "../../assets/img/bg7.jpg";

import { Redirect } from 'react-router-dom';

import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";

const dashboardRoutes = [];

const mapStateToProps = state => {
  return {
    userValid: state.isUserAuthorized.userValid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSession: (props) => dispatch(isUserAuthorized(props))
  }
}

class LoginPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
    };
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

  onSubmitLogin = (toggleSession, userValid) => {
    fetch('http://crg-server.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email.toLowerCase(),
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          let toggleUser = !userValid;
            toggleSession(toggleUser)
        }
      })
  }  

  render(){
    const { 
      classes,
      userValid, 
      toggleSession,
      ...rest
      } = this.props;

      if (userValid) {
        return <Redirect to='/rentals'/>;
      } else

    return (
    <div>
      <Header
        color="white"
        routes={dashboardRoutes}
        brand="Common Realty Group"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
      <div className={classes.container}>
        <SectionLogin 
          onEmailChange={this.onEmailChange}
          onPasswordChange={this.onPasswordChange}
          handleMouseDownPassword={this.handleMouseDownPassword}
          handleClickShowPassword={this.handleClickShowPassword}
          email={this.state.email}
          password={this.state.password}
          showPassword={this.state.showPassword}
          onSubmitLogin={this.onSubmitLogin}
          userValid={userValid}
          toggleSession={toggleSession}
        />
      </div>
      <br/><br/><br/>
      <Footer whiteFont/>
      </div>
    </div>
    );

  }
}

export default withStyles(loginPageStyle)(connect(mapStateToProps, mapDispatchToProps)(LoginPage));