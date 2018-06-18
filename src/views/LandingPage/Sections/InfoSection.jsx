import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Map from "@material-ui/icons/Map";
import Pets from "@material-ui/icons/Pets";
import Subway from "@material-ui/icons/Subway";
// core components
import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import InfoArea from "../../../components/InfoArea/InfoArea.jsx";

import productStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class InfoSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Search & Discover.</h2>
            <h5 className={classes.description}>
              Looking for an apartment in Cambridge or Somerville? You've come to the right place. 
              Common Realty Group has hundreds of apartments for rent in these and nearby communities, 
              so we're sure to have a place that's just right for you.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Filter Locations"
                description="Search our extensive database of listings, which we update daily. We offer a diverse selection of apartments for rent in Cambridge and Somerville."
                icon={Map}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Pet Friendly"
                description="We know that our pets are a member of our families and finding a home for them is as important as finding one for ourselves."
                icon={Pets}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Points of Interest"
                description="Cambridge and Somerville boast many interesting neighborhoods – and Common Realty Group knows all of them, because this is our home."
                icon={Subway}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(InfoSection);
