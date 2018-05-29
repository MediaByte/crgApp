//ReactJS
import React from 'react';
import PropTypes from 'prop-types';

//Material-UI components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/lab/Slider';

//Project Components


//JSS styles
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    height: 250,
    margin: 30,
    width: 400,
  }),
  slider: {
    marginTop: 40,
  },
  container: {
    width: 300,
  },
});

const PaperSheet = (props) => {
  const { 
    classes, 
    headline, 
    paragraph, 
    bedChange, 
    bedValue  
  } = props;

  return (
    <Grid container justify={'center'}>
      <Paper className={classes.root} elevation={20}>
        <Typography variant="headline" component="h3">
          {headline}
        </Typography>
        <Typography component="p">
          {paragraph}
        </Typography>
        <div className={classes.slider}>
           <Grid container justify={'center'}>
        <div className={classes.container}>
          <Slider 
            value={bedValue} 
            min={0} 
            max={5} 
            step={1} 
            onChange={bedChange} 
          />
        </div><br/><br/><br/>
        <Grid container justify={'center'}>
          <Typography variant="title" gutterBottom>
            { bedValue < 1 ? 'Studio' : bedValue }
          </Typography>
        </Grid>
      </Grid>
        </div>
      </Paper>
    </Grid>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);