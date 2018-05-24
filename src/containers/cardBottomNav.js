import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation from 'material-ui/BottomNavigation/';
import BottomNavigationAction from 'material-ui/BottomNavigation';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    width: 500,
  },
};

class cardNavigation extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }


  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Details" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Map" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

cardNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(cardNavigation);