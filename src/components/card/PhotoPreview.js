//ReactJS
import React from 'react';
import PropTypes from 'prop-types';

//Material-UI Components
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';

//Project Components
import CarouselComponent from './CarouselComponent';
import MapSnippet from './MapSnippet';
import DetailsComponent from './DetailsComponent';
import ContactForm from '../../views/LandingPage/Sections/ContactForm';


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
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    cursor: 'pointer'
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class PhotoPreview extends React.Component {
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
      photo,
      unit
    } = this.props;

    return (
      <div>
        <CardMedia 
          className={classes.media} 
          image={photo} 
          title={`${title} #${unit}, ${subTitle} MA`}
          onClick={this.handleClickOpen}
        />
        
        <Dialog disableBackdropClick fullScreen open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
          <AppBar position='fixed'>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>

              </Typography>
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
              <CarouselComponent title={title} subTitle={subTitle} photoArray={photoArray}/>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
            <DetailsComponent price={price} movedate={movedate} beds={beds} features={features} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <MapSnippet lat={lat} long={long} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <ContactForm />
            </Grid>
          </Grid>
          </div>
        </Paper>   
        </Dialog>
      </div>
    );
  }
}

PhotoPreview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PhotoPreview);