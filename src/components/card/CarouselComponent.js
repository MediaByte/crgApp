import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import Card from "./Card.jsx";
import carouselStyle from "../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

class CarouselComponent extends React.Component {
  render() {
    const { classes, photoArray, title, subTitle } = this.props
    const slides = photoArray.map((photo, i) => {
      return(
        <div>
          <img height={500} key={i} src={photo._text} alt={`${title}, ${subTitle}`} className="slick-image"/>
          <div className="slick-caption">
            <h4>
              <LocationOn className="slick-icons" />{ `${this.props.title}, ${this.props.subTitle}` }
            </h4>
          </div>
        </div>
      )
    })
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
       <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify={'center'}>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  {slides}
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(CarouselComponent);