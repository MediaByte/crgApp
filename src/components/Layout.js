//ReactJS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Material-UI Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
// import StarIcon from '@material-ui/icons/Star';

//Project Components
import BedroomController from './bedrooms/BedroomController';
import NeighborhoodController from './neighborhoods/NeighborhoodController';
import PriceController from './price/PriceController';


//Material-UI styles
const styles = {
    drawerlist: { 
        width: 'auto' 
    },
    list: { 
        width: 280 
    },
    flex: { 
        flex: 1 
    },
    menuButton: { 
        marginLeft: -12, 
        marginRight: 20 
    },
  };

 class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false,
            leftSide: false,
        }
    }

render() {
    const { classes, onChangeBed, bedValue, city, handleCityChange } = this.props;

    return (
        <AppBar position="fixed" color='primary'>
            <Toolbar>
                <IconButton onClick={this.toggleDrawer('leftSide', true)} className={classes.menuButton} color="inherit" aria-label="Menu"><MenuIcon /></IconButton>
                <Drawer onKeyDown={this.toggleDrawer('leftSide', true)} open={this.state.leftSide} onClose={this.toggleDrawer('leftSide', false)}>
                    <div tabIndex={0} role="button">
                        <div className={classes.list}>
                            <List>
                                <BedroomController bedChange={onChangeBed} bedValue={bedValue} />
                                <NeighborhoodController city={city} handleCityChange={handleCityChange} />
                                <PriceController  />
                            </List>
                        </div>
                    </div>
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}

toggleDrawer = (side, open) => () => {
    this.setState({[side]: open});
};

}          

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

export default withStyles(styles, { withTheme: true })(Layout);