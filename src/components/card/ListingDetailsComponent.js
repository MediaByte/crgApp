//ReactJS
import React from 'react';
import PropTypes from 'prop-types';

//Material-UI Components
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

//Project Components
import CarouselComponent from './CarouselComponent';
import MapSnippet from './MapSnippet';
import DetailsComponent from './DetailsComponent';


//Styles
const styles = theme => ({
  flex: {
    flex: 1,
  },
  content: theme.mixins.gutters({
    marginTop: 68,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 5,
    paddingTop: 15,
    borderRadius: '8px',
  }),
});

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
    const { 
      classes, 
      photoArray, 
      lat, 
      long, 
      subTitle,
      title,
      price,
      movedate,
      beds, 
      features,
    } = this.props;

    return (
      <div>
        <Button size="small" color="secondary" onClick={this.handleClickOpen}>Details</Button>
        <Dialog fullScreen open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
          <AppBar position='fixed'>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>

              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                Request Showing
              </Button>
            </Toolbar>
          </AppBar>
        <Paper className={classes.content} elevation={10}>
          <Typography variant="headline" component="h4">
            {title}
          </Typography>
          <Typography variant="subheading" component="h4">
            {subTitle}, MA
          </Typography>
          <div>
          <Grid container>
            <Grid item xs={12}>
            <DetailsComponent price={price} movedate={movedate} beds={beds} features={features} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <CarouselComponent photoArray={photoArray}/>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <MapSnippet lat={lat} long={long} />
            </Grid>
          </Grid>
          </div>
        </Paper>   
        </Dialog>
      </div>
    );
  }
}

ListingDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListingDetails);