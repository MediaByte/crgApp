//ReactJS
import React from 'react';
import PropTypes from 'prop-types';

//Material-UI Component
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function ProgressComponent(props) {
  const { classes } = props;
  return (

    <Grid container justify={'center'}>
      <Grid item>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <CircularProgress className={classes.progress} thickness={2} size={80} color="secondary" />
      </Grid>
    </Grid>

  );
}

ProgressComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgressComponent);
