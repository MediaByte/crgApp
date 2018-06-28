/*eslint-disable*/
import React from "react";

//State Management
import { connect } from 'react-redux';
import { isUserAuthorized } from '../../state/actions';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from '@material-ui/core/Typography';

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";
import Button from "../CustomButtons/Button.jsx";

//React Router
import { NavLink } from 'react-router-dom'



import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";



const mapStateToProps = state => {
  return {
    userValid: state.userValid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSession: (props) => dispatch(isUserAuthorized(props))
  }
}

class HeaderLinks extends React.Component {
  
  render() {
  const { classes, userValid, toggleSession } = this.props;

  
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink className={classes.navLink} to='/'>
          Home
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink className={classes.navLink} to='/rentals'>
          Find a Rental
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          onClick={() => window.open('https://crgrecruit.github.io/')}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Join our Team
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
      { 
        userValid ? (
          <Button 
            onClick={() => window.location = '/'}
            color="transparent"
            className={classes.navLink}
          >
            Log out
          </Button>
        ) : (
          <NavLink className={classes.navLink} to='/login'>
            Sign in
          </NavLink>
          )
      }

      </ListItem>
    </List>
  );
}
}

export default withStyles(headerLinksStyle)(connect(mapStateToProps, mapDispatchToProps)(HeaderLinks));
