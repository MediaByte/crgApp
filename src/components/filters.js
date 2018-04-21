import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { mailFolderListItems, otherMailFolderListItems } from '../containers/tileData';


const styles = {
  fullList: {
    width: '260',
  },
  list: {
    width: 260,
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
            left: false,
        };

  }


  toggleDrawer = (side, open) => () => {
    this.setState({[side]: open});
  };

  render() {
    const { classes } = this.props;
    const sideList = (
        <div className={classes.list}>
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
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
                        onClick={this.toggleDrawer('left', false)}
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