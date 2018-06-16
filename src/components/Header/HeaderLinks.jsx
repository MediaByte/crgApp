/*eslint-disable*/
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";
import Button from "../CustomButtons/Button.jsx";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="http://careers.commonrealtygroup.com"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >Join Our Team
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/rentals"
          color="transparent"
          className={classes.navLink}
        >Find A Rental
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
