import React from 'react';
import PropTypes from 'prop-types';

//Material-UI Dependencies
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//Components
// import MapSnippet from './GoogleMapIntegration';

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
  	const { classes, streetnumber, streetname, city, photo, unit, beds, } = props
		// lat, 
		// long, 
		// price,
		// baths,  

	const title = `${streetnumber} ${streetname}`
	const subTitle = `${city} MA`

  return (
    <div>
      <Card className={classes.card}>

        <CardMedia className={classes.media} image={photo} title={`${title} #${unit}, ${subTitle}`} />

        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">
          	{`This ${city} ${beds} bedroom apartment is for rent and available 9/1.  This unit features Granite counter tops, stainless steel appliances and hardwood floors.`}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="secondary">
            Details
          </Button>
        </CardActions>

      </Card>
    </div>
  );
}

MapListings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapListings);