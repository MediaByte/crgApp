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
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
//Project Components
import BedroomComponent from './BedroomComponent';
//State
import { connect } from 'react-redux';
import { requestListings } from '../../state/actions'
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
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
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
    return (
      <div>
        <BottomNavigationAction showLabel onClick={this.handleClickOpen} label="Bedrooms" icon={<SupervisorAccount />} />
          <Dialog fullWidth open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
            <DialogTitle id="confirmation-dialog-title">Update Bedrooms?</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  You can filter your search by budget.  We'll return all results from landlords & listings in your criteria.
                </DialogContentText>
                  <BedroomComponent />
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
BedroomController.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(BedroomController));

