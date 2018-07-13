import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";

//Styles
import productStyle from "../../assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

//Project Files
import RenderMarkers from './renderMarkers';


class GoogleMapComponent extends React.Component {

  constructor() {
    super();
      this.state = {
        listings: [],
      }
  }

  doWeHaveListings = () => {
    if (this.state.listings.hasOwnProperty('YGLResponse')) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { classes } = this.props;
    const {doWeHaveListings} = this;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Just Listed.</h2>
            <h5 className={classes.description}>
              Listings are going fast! Don't miss out on some of our HOTTEST deals.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12}>
<<<<<<< HEAD
            { doWeHaveListings() 
              ? <RenderMarkers 
                data={this.state.listings.YGLResponse[0].Listings[0].Listing}
                isMarkerShown 
              /> : 'Loading...'
=======
            { 
              doWeHaveListings() 
                ? <RenderMarkers 
                    data={this.state.listings.YGLResponse[0].Listings[0].Listing}
                    isMarkerShown 
                  /> 
                : 'Loading...'
>>>>>>> 8a63451f1994bc1c5357908198212067a60445f7
            }
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }

   componentDidMount() {
      fetch(`https://crg-server.herokuapp.com/rentals?city_neighborhood=Cambridge,Somerville&include_mls=1&detail_level=1`)
        .then(xml => xml.json())
        .then(data => { this.setState({ listings: data })})
        .catch(err => console.log(err));
    }
  }


export default withStyles(productStyle)(GoogleMapComponent);
