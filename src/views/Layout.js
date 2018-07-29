//ReactJS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Material-UI Components
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Paper from '@material-ui/core/Paper';
//Project Components
import BedroomController from '../components/bedrooms/BedroomController';
import NeighborhoodController from '../components/neighborhoods/NeighborhoodController';
import PriceController from '../components/price/PriceController';
import DateController from '../components/moveDate/DateController';
import Header from "../components/Header/Header.jsx";
import HeaderLinks from "../components/Header/HeaderLinks.jsx";
//Material-UI styles
const styles = {
    bttmNav: {
    	position: 'fixed',
    	width: '100%',
    	marginTop: 5,
    	zIndex: +1,
    	bottom: 0,
    	height: 65,
    },
  };
const dashboardRoutes = [];
 class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDrawer: false,
            leftSide: false,
            value: 0,
        }
    }
  handleChange = (event, value) => {
    this.setState({ value });
  };
render() {
    const { value } = this.state;
    const { classes, isUserAuthorized, ...rest } = this.props;
    return (
        <div>
            <Header
              color="white"
              routes={dashboardRoutes}
              brand="Common Realty Group"
              rightLinks={<HeaderLinks />}
              fixed
              changeColorOnScroll={{
                height: 400,
                color: "white"
              }}
              {...rest}
            />
            <Paper className={classes.bttmNav}>
              <BottomNavigation value={value} onChange={this.handleChange} >
                <DateController />
                <BedroomController />
                <NeighborhoodController />
                <PriceController />
              </BottomNavigation>
            </Paper>
        </div>
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
