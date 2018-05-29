//ReactJS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Material-UI Dependencies
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

//Project Components
import PaperSheet from './BedPaper';

//Styles
const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

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
    const { classes, bedChange, bedValue } = this.props;
    return (
      <div>
        <List>
          <ListItem button onClick={this.handleClickOpen}>
            <ListItemText primary="Update Bedrooms" secondary={`${bedValue} Bedrooms`} />
          </ListItem>
          <Divider />
        </List>
        <Dialog 
          fullScreen 
          open={this.state.open} 
          onClose={this.handleClose} 
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton 
                color="inherit" 
                onClick={this.handleClose} 
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}></Typography>
              <Button color="inherit" onClick={this.handleClose}>Update</Button>
            </Toolbar>
          </AppBar>
            <PaperSheet 
              bedValue={bedValue} 
              bedChange={bedChange} 
              paragraph={'Use the slider below.'} 
              headline={'Bedrooms'} 
            />
        </Dialog>
      </div>
    );
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
}

BedroomController.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BedroomController);