import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { RentalController } from '../containers/tileData';


const styles = {
  fullList: {
    width: '300',
  },
  list: {
    width: 300,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
class ListingFilters extends React.Component {
  constructor() {
    super();
        this.state = {
            left: true,
        };
  }
  toggleDrawer = (side, open) => () => {
    this.setState({[side]: open});
  };
  render() {
    const { classes } = this.props;
    const sideList = (
        <div className={classes.list}>
          <List>{RentalController}</List>
          <Divider />
        </div>
      );
        return (
            <div>
                <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)} >
                    <div
                        tabIndex={0}
                        role="button"
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
  }
}

ListingFilters.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListingFilters);