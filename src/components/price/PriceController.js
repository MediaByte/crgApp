//ReactJS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Material-UI v1 Components
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';

//Project Components
import PriceComponent from './PriceComponent';

//Styles in JSS
const styles = theme => ({

  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    height: 250,
    width: 400,
  }),
  slider: {
    margin: 60,
    width: 250,
    padding: 10,
  },
});

const Transition = (props) => {
  return <Slide direction="up" {...props} />;
}

class PriceController extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    };
  }

render() {
  const { classes, handleMaxPriceChange, handleMinPriceChange, minPrice, maxPrice } = this.props;
    return (
      <div>
        <List>
          <ListItem button onClick={this.handleClickOpen}>
            <ListItemText primary="Update Price" secondary={`min:$${minPrice}, max:$${maxPrice}`} />
          </ListItem>
          <Divider />
        </List>

        <Dialog open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
            <DialogTitle id="confirmation-dialog-title">Update Price?</DialogTitle>
            
            <Grid container justify={'center'}>
              <Grid item xs={12}>
                <div className={classes.slider}>
                  <PriceComponent handleMaxPriceChange={handleMaxPriceChange} handleMinPriceChange={handleMinPriceChange} minPrice={minPrice} maxPrice={maxPrice} />
                </div>
              </Grid>
            </Grid>

            <DialogActions>
              <Button onClick={this.handleClose} color="primary">Done</Button>
            </DialogActions>
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

PriceController.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PriceController);