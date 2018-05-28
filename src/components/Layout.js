import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Material-UI Components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
// import StarIcon from '@material-ui/icons/Star';

//Project Components
import RentalController from './RentalController'


//Material-UI styles
const styles = {
    drawerlist: { 
        width: 'auto' 
    },
    list: { 
        width: 300 
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
            bathSlider: 1,
            defaultValue: 0,
            inputValue: 0,
            openDrawer: false,
            leftSide: false,
        }
    }

render() {
// const { onChangeBed, bedValue, handleChange, amount } = this.props;
const { classes } = this.props;
    return (
        <AppBar position="fixed" color='primary'>
            <Toolbar>
                <IconButton onClick={this.toggleDrawer('leftSide', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Drawer open={this.state.leftSide} onClose={this.toggleDrawer('leftSide', false)}>
                    <div tabIndex={0} role="button">
                        <div className={classes.list}>
                            <List>
                                <RentalController />
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