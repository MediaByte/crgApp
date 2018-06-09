//ReactJS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Material-UI
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//Project Components
import ChipsComponent from './ChipsComponent';

//CSS in JS
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 10,
    height: theme.spacing.unit * 35,
    marginBottom: theme.spacing.unit * 2,
    borderRadius: '9px',
    marginTop: 5,
    paddingBottom: theme.spacing.unit / 3,
  }),
  contentOne: {
    marginTop: 20,
  }
});

class MapSnippet extends Component {
  render() {

    const { 
      classes,
      price,
      movedate,
      beds,
    } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={20}>
          <Typography variant="headline">Listing Details</Typography>
            
          <Grid className={classes.contentOne} container>
            <Grid item xs={4}>
              <Typography variant="title" align="center">Beds</Typography>
                <Grid container> 
                  <Grid item xs={12}>
                    <Typography variant="body2" align="center">{beds}</Typography>
                  </Grid>
                </Grid>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="title" align="center">Price</Typography>
                <Grid container> 
                  <Grid item xs={12}>
                    <Typography variant="body2" align="center">${price}</Typography>
                  </Grid>
                </Grid>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="title" align="center">Date</Typography>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="body2" align="center">{movedate}</Typography>
                  </Grid>
                </Grid>
            </Grid>
          </Grid>

          <Grid container justify={'left'}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <br/>
              <ChipsComponent />
            </Grid>
          </Grid>
      
        </Paper>   
      </div> 
    );
  }
}

MapSnippet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapSnippet);