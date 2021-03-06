//ReactJS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Google Map Components
import MapComponent from './MapComponent'

//Material-UI
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 10,
    height: '470px',
    marginBottom: 20,
    borderRadius: '9px',
  }),
});

class MapSnippet extends Component {
  render() {
    const { classes, lat, long } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={20}>
          <Typography variant="headline" component="h3">
            Google Maps
          </Typography>
          <MapComponent lat={lat} long={long} isMarkerShown />
        </Paper>   
      </div> 
    );
  }
}

MapSnippet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapSnippet);