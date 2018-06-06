//ReactJS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Google Map Components
import MapComponent from './MapComponent'

//Material-UI
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


//CSS & styling
import 'tachyons';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    marginTop: theme.spacing.unit * 1,
    height: '450px',
    marginBottom: 100
  }),
});

class MapSnippet extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={6}>
          <Typography variant="headline" component="h3">
            Google Map
          </Typography>

        </Paper>   
      </div> 
    );
  }
}

MapSnippet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapSnippet);