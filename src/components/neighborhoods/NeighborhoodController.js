//ReactJS//ReactJS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//State
import { connect } from 'react-redux';
import { requestListings } from '../../state/actions';

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


const mapStateToProps = state => {
  return {
    city: state.userSettings.city,
    fromDate: state.userSettings.fromDate,
    toDate: state.userSettings.toDate,
    minBeds: state.userSettings.minBeds,
    maxBeds: state.userSettings.maxBeds,
    minPrice: state.userSettings.minPrice,
    maxPrice: state.userSettings.maxPrice
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestListings: (link) => dispatch(requestListings(link))
  }
}

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
  const { classes } = this.props;
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
                  <NeighborhoodComponent />
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
    this.props.requestListings(`https://crg-server.herokuapp.com/rentals?city_neighborhood=${this.props.city}&min_bed=${this.props.minBeds}&max_bed=${this.props.maxBeds}&detail_level=2&avail_from=${this.props.fromDate}&avail_to=${this.props.toDate}&max_rent=${this.props.maxPrice}&min_rent=${this.props.minPrice}`)
  };
}

NeighborhoodController.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(NeighborhoodController));
