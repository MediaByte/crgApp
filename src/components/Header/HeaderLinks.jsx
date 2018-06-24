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
import { Link } from 'react-router-dom'


import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  
  render() {
  const { classes } = this.props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          <Link to='/'>
            <Typography color={'secondary'} variant="button" gutterBottom>
              Home
            </Typography>
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="http://careers.commonrealtygroup.com"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
        <Typography color={'secondary'} variant="button" gutterBottom>
          Join Our Team
        </Typography>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
          <Link to='/rentals'>
            <Typography color={'secondary'} variant="button" gutterBottom>
              Find a Rental
            </Typography>
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
        <Typography color={'secondary'} variant="button" gutterBottom>
          Sign in
        </Typography>
        </Button>
      </ListItem>
    </List>
  );
}
}

export default withStyles(headerLinksStyle)(HeaderLinks);
