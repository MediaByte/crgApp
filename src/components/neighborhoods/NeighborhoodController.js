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
import Grid from '@material-ui/core/Grid';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';

//Project Components
import NeighborhoodComponent from './NeighborhoodComponent'

//Styles in JSS
const styles = theme => ({

  root: theme.mixins.gutters({
    paddingTop: 5,
    paddingBottom: 16,
    height: 250,
    width: 660,
  }),
  slider: {
    margin: 60,
    width: 250,
    height: 200,
    padding: 10,
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
        <Dialog open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
          <DialogTitle id="confirmation-dialog-title">Update Location?</DialogTitle>

              <Grid container justify={'center'}>
                <Grid item xs={12} >
                  <div className={classes.slider}>
                    <NeighborhoodComponent city={city} handleCityChange={handleCityChange}/>
                  </div>
                </Grid>
              </Grid>

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
