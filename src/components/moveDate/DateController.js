//ReactJS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Material-UI v1 Components
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


//Project Components
import DateComponent from './DateComponent';


//Styles in JSS
const styles = theme => ({

  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    height: 250,
  }),
  content: {
    padding: 10,
    margin: 60
  },
});

const Transition = (props) => {
  return <Slide direction="up" {...props} />;
}

class BedroomController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    };
  }

render() {
  const {handleDateChange } = this.props;
    return (
      <div>
      <BottomNavigationAction showLabel onClick={this.handleClickOpen} label="Move Date" icon={<RestoreIcon />} />
        <Dialog fullWidth open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
          <DialogTitle id="confirmation-dialog-title">Update Move-in Date?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Filter your search by Move-Date.  
                We'll return all results from landlords & 
                listings in your specified move-in date.
              </DialogContentText>
                <DateComponent from={this.props.from} to={this.props.to} handleDateChange={handleDateChange}/>
              </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="secondary">Done</Button>
            </DialogActions>
        </Dialog>

      </div>
    );
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
}

BedroomController.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BedroomController);