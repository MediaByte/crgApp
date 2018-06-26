/*eslint-disable*/
import React from "react";

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

class HeaderLinks extends React.Component {
  
  render() {
  const { classes } = this.props;
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
        <NavLink className={classes.navLink} to='/join'>
          Join Our Team
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink className={classes.navLink} to='/login'>
          Sign in
        </NavLink>
      </ListItem>
    </List>
  );
}
}

export default withStyles(headerLinksStyle)(HeaderLinks);
