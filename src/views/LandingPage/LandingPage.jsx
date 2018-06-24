import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography';

//React Router
import { Link } from 'react-router-dom'

// core components
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import InfoSection from "./Sections/InfoSection.jsx";
import GoogleMapComponent from '../../components/GoogleMap/GoogleMapComponent';

const dashboardRoutes = [];

class LandingPage extends React.Component {

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
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
        <Parallax filter image={require("../../assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>LESS HUNT, MORE FIND.</h1>
                <h4>
                  Whether you're a Harvard or MIT student or working professional 
                  looking to lease an apartment, Common Realty Group will meet your 
                  needs. 
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  rel="noopener noreferrer"
                >
                <Link to='/rentals'>
                  <Typography color={'primary'} variant="button" gutterBottom>
                    Find a Rental
                  </Typography>
                </Link>
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GoogleMapComponent />
            <InfoSection />
          </div>
        </div>
          <Footer />
        
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
