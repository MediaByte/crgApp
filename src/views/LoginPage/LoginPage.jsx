import React from 'react';

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

// core components
import Button from "../../components/CustomButtons/Button.jsx";

//Project Components
import SectionLogin from './SectionLogin';


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

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
          this.handleClose("modal")
        }
      })
  }  

  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  render(){
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.modal}
          disableBackdropClick
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("modal")}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description">
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}>
            <h5 className={classes.modalTitle}>Register</h5>
          </DialogTitle>
          <DialogContent >

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

          </DialogContent>
          <DialogActions
            className={classes.modalFooter +" " + classes.modalFooterCenter}>
            <Button
              onClick={() => this.onSubmitRegister()}
              color="danger">
              Continue
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles()(LoginPage);