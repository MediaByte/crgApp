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
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";

// core components
import Button from "../../components/CustomButtons/Button.jsx";
import modalStyle from "../../assets/jss/material-kit-react/modalStyle.jsx";

//Project Components
import SectionRegister from './SectionRegister';

import { NavLink } from 'react-router-dom'


const Transition = (props) => {
  return <Slide direction="down" {...props} />;
}

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
    fetch('http://crg-server.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email.toLowerCase(),
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
          disableEscapeKeyDown
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("modal")}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description">
          <DialogTitle 
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
          <NavLink className={classes.modalClose} to='/'>
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
            >
              <Close className={classes.modalClose} />
            </IconButton>
          </NavLink>
          <h4 className={classes.modalTitle}>Register</h4>
          </DialogTitle>
          <DialogContent 
            id="modal-slide-description"
            className={classes.modalBody}
          >

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
          </DialogContent>
          <DialogActions disableActionSpacing className={classes.modalFooter + " " + classes.modalFooterCenter}>
            <Button onClick={() => this.onSubmitRegister(toggleSession, userValid)} color="danger">
              Continue
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(connect(mapStateToProps, mapDispatchToProps)(CaptureLead));


