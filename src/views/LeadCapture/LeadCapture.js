//ReactJS
import React from 'react';

//State Management
import { connect } from 'react-redux';
import { isUserAuthorized } from '../../state/actions';

//Material-UI components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";

// core components
import Button from "../../components/CustomButtons/Button.jsx";

//Project Components
import SectionRegister from './SectionRegister';


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const mapStateToProps = state => {
  return {
    userValid: state.userValid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSession: (props) => dispatch(isUserAuthorized(props))
  }
}


class CaptureLead extends React.Component{
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

  onSubmitRegister = (toggleSession, userValid) => {
    fetch('http://127.0.0.1:4000/register', {
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
        if (user.id) {
          let toggleUser = !userValid;
            toggleSession(toggleUser)
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
    const { 
      classes, 
      userValid, 
      toggleSession
    } = this.props;

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

            <SectionRegister 
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

          <DialogActions className={classes.modalFooter +" " + classes.modalFooterCenter}>
            <Button onClick={() => this.onSubmitRegister(toggleSession, userValid)} color="danger">
              Continue
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles()(connect(mapStateToProps, mapDispatchToProps)(CaptureLead));


