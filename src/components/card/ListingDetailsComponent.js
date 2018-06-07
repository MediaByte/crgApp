//ReactJS
import React from 'react';
import PropTypes from 'prop-types';

//Material-UI Components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

//Project Components
import DetailsComponent from './DetailsComponent'


//Styles
const styles = {
  flex: {
    flex: 1,
  },
  content: {
    marginTop: 70,
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ListingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      ListingDetails: [],
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, photoArray, lat, long } = this.props;

    return (
      <div>
        <Button size="small" color="secondary" onClick={this.handleClickOpen}>Details</Button>
        <Dialog fullScreen open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
          <div className={classes.content}>
            <DetailsComponent lat={lat} long={long} photoArray={photoArray} />
          </div>
        </Dialog>
      </div>
    );
  }
}

ListingDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListingDetails);