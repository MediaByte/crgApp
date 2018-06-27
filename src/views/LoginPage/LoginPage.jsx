import React from 'react';

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "../../components/Header/Header.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Footer from "../../components/Footer/Footer.jsx";

//Project Components
import SectionLogin from './SectionLogin';

import image from "../../assets/img/bg7.jpg";

import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";

const dashboardRoutes = [];

class LoginPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      email: '',
      password: '',
      name: '',
      showPassword: false,
    };
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
    fetch('http://127.0.0.1:4000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          console.log(user)
        }
      })
  }  

  render(){
    const { 
      classes,
      ...rest
            } = this.props;
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
          onNameChange={this.onNameChange}
          onEmailChange={this.onEmailChange}
          onPasswordChange={this.onPasswordChange}
          handleMouseDownPassword={this.handleMouseDownPassword}
          handleClickShowPassword={this.handleClickShowPassword}
          email={this.state.email}
          password={this.state.password}
          name={this.state.name}
          showPassword={this.state.showPassword}
        />
      </div>
      <br/><br/><br/>
      <Footer whiteFont/>
      </div>
    </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);