//ReactJS
import React from 'react';
import PropTypes from 'prop-types';

//Material-UI Dependencies
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//Components
import ListingDetails from './ListingDetailsComponent';

//Material-UI styles
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

function MapListings(props) {
  	const { classes, price, movedate, streetnumber, streetname, city, photo, unit, beds, } = props
		// lat, 
		// long, 
		// 
		// baths,  

	const title = `${streetnumber} ${streetname}`
	const subTitle = `${city}`

  return (
    <div>
      <Card className={classes.card}>

        <CardMedia className={classes.media} image={photo} title={`${title} #${unit}, ${subTitle} MA`} />

        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
          	{`
            This ${city} ${beds} bedroom apartment is available ${movedate}, for rent 
            starting at ${price}.
            `}
          </Typography>
        </CardContent>

        <CardActions>
          <ListingDetails />
        </CardActions>

      </Card>
    </div>
  );
}

MapListings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapListings);