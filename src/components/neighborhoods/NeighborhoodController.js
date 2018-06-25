//ReactJS//ReactJS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Material-UI v1 Components
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContent';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';

//Project Components
import NeighborhoodComponent from './NeighborhoodComponent'

//Styles in JSS
const styles = theme => ({
    root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
    contentControl: {
    width: '100%',
  },
  autoComplete: {
    marginBottom: 200,
  },
});

const Transition = (props) => {
  return <Slide direction="up" {...props} />;
}

class NeighborhoodController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    };
  }

render() {
  const { classes, handleCityChange, city } = this.props;
    return (
      <div>
        <BottomNavigationAction showLabel onClick={this.handleClickOpen} label="Neighborhoods" icon={<LocationOnIcon />} />
        <Dialog fullWidth open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
          <DialogTitle id="confirmation-dialog-title">Update Location?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Filter your search by city and neighborhood.  We'll return all listings in your specific criteria.
              </DialogContentText>
              <div className={classes.autoComplete}>
                <NeighborhoodComponent city={city} handleCityChange={handleCityChange}/>
              </div>
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

NeighborhoodController.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NeighborhoodController);
