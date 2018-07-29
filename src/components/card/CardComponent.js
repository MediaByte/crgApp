//ReactJS
import React from 'react';
import PropTypes from 'prop-types';
//Material-UI Dependencies
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//Components
import ListingDetails from './ListingDetailsComponent';
import PhotoPreview from './PhotoPreview'
//JSS styles
const styles = {
  card: {
    maxWidth: 345,
    minWidth: 345,
    margin: 18,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};
const MapListings = (props) => {
  	const { 
      classes, 
      price, 
      movedate, 
      streetnumber, 
      streetname, 
      city, 
      photo, 
      unit, 
      beds,
      photoArray, 
      lat,
      long,
    } = props 
  	const title = `${streetnumber} ${streetname}, ${unit}`
  	const subTitle = `${city}`
    const features = [props.heat, props.hotwater, props.electric]
  return (
    <div>
      <Card raised className={classes.card}>
        <PhotoPreview 
          photo={photo} 
          unit={unit}
          photoArray={photoArray}
          lat={lat}
          long={long}
          price={price}
          movedate={movedate}
          city={city}
          beds={beds}
          streetnumber={streetnumber}
          streetname={streetname}
          title={title}
          subTitle={subTitle}
          features={features}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
          	{`
              Located in ${city}, this ${beds} bedroom rental is available ${movedate},
              starting at $${price}.
            `}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
            <ListingDetails 
              photoArray={photoArray}
              lat={lat}
              long={long}
              price={price}
              movedate={movedate}
              city={city}
              unit={unit}
              beds={beds}
              streetnumber={streetnumber}
              streetname={streetname}
              title={title}
              subTitle={subTitle}
              features={features}
            />
        </CardActions>
      </Card>
    </div>
  );
}
MapListings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapListings);